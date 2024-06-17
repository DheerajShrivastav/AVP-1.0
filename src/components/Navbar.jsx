import { useState } from 'react'
import { close, logo, Logo_B, menu } from '../assets'
import { navLinks } from '../constants'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  return (
    <nav
      className="w-full flex py-6 justify-between items-center bg-transparent  z-50 "
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <a href="/">
        <img
          src={Logo_B}
          alt="AVP Logo"
          className="w-[120px] h-[80px] mr-20 "
        />
      </a>

      <ul className="list-none sm:flex hidden justify-start items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white`}
            onMouseEnter={() => setDropdownOpen(nav.id)}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            {isHomePage ? (
              <a href={`#${nav.id}`}>{nav.title}</a>
            ) : (
              <a href={`/#${nav.pathTo}`}>{nav.title}</a>
            )}

            {/* Dropdown menu */}
            {dropdownOpen === nav.id && nav.dropdown && (
              <div
                className="block absolute  min-w-[160px] shadow-md   mx-4  rounded-xl sidebar z-50"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              >
                {nav.dropdown.map((item, index) => (
                  <a
                    key={index}
                    href={`${item.path}`}
                    className={`flex no-underline px-4 py-3
                    // adding css

                   font-poppins font-normal cursor-pointer text-[16px]"text-white  `}
                    // onClick={() => setActive(nav.title)}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-black ml-auto mr-10 px-4 py-2  bg-white bg-opacity-30 rounded hover:bg-white">
          <a href="/#contactUs">CONTACT US</a>
        </li>
      </ul>

      <div className={`sm:hidden flex flex-1 justify-end items-center`}>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6  absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar blur-9`}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <ul className="list-none flex flex-col justify-end items-start flex-1">
            {navLinks.map(
              (nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
                  } text-white`}
                  onMouseEnter={() => setDropdownOpen(nav.id)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  {isHomePage ? (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  ) : (
                    <a href={`/#${nav.pathTo}`}>{nav.title}</a>
                  )}

                  {/* Dropdown menu */}
                  {dropdownOpen === nav.id && nav.dropdown && (
                    <div className="block absolute bg-gray-100 min-w-[160px] shadow-md z-20">
                      {nav.dropdown.map((item, index) => (
                        <a
                          key={index}
                          href={`${item.path}`}
                          className="block text-black no-underline px-4 py-3"
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ),
              <li
                className="font-poppins font-normal cursor-pointer text-[16px] text-black"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              >
                <p>CONTACT US</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
