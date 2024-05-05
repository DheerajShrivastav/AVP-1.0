
import Button from './Button';
import styles from '../style';


const CTA = () => (
  <section id="contactUs" className={`${styles.flexCenter} ${styles.paddingY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2}>Connect With Us :<br className="sm:block hidden" />Let's Build Together!</h2>

      <ul className="list-disc ml-6 mt-2 mb-6 text-white">
        <li className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">Email: <a href="mailto:avp.erndvp@gamil.com">avp.erndvp@gamil.com</a>
        </li>
        <li className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          WhatsApp:{' '}
          <a href="https://wa.me/9766776617" className=" mb-2 text-blue-500">
            Click here
          </a>
        </li>
        <li className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">Phone: 9766776617
        </li>
      </ul>

      <div className=" sm:ml-0 ml-0 sm:mt-0 mt-10">
        <button type="button" className={`py-2 px-4  font-poppins font-semibold text-[16px] text-primary bg-blue-gradient rounded-[30px] outline-none ${styles} rounded-[10px] `}>
          Call Now
        </button>
        {/* className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} rounded-[10px]` */}
      </div>
    </div>

    <div className=" sm:ml-10  sm:mt-0  w-[460px] h-[200px] sm:block ml-4 ">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15007.890870155363!2d75.3582199!3d19.8833739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3ac2040d495%3A0xa4b9dcfa262f3849!2sAVP%20Engineer&#39;s%20and%20Developers!5e0!3m2!1sen!2sin!4v1705146969887!5m2!1sen!2sin"
        width="100%"
        height="200"
        className='rounded-[20px] sm:mt-0 mt-0'
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </section>
)

export default CTA
