import styles, { layout } from '../style'
import { servicesSection } from '../constants'
import FeedbackCard from './FeedbackCard'
import { useState } from 'react'

const Servicesofferd = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40 " />
      <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
        {servicesSection.map((card) => (
          <a href={card.path} key={card.id}>
            <FeedbackCard key={card.id} {...card} />
          </a>
        ))}
      </div>
    </section>
  )
}
const Projects = () => {
  const [selectedService, setSelectedService] = useState(servicesSection[0])
  return (
    <div
      className={`flex  justify-between flex-wrap sm:mb-20 mb-6 text-white`}
    >
      <div className=" max-w-[370px] md:mr-10 sm:mr-5 mr-5 my-5 feedback-card">
        <img
          key={selectedService.id}
          src={selectedService.img}
          className=" object-cover "
        />
      </div>
      <div className="  flex flex-col justify-around  ">
        {servicesSection.map((service) => (
          <h2 key={service.id} onMouseEnter={() => setSelectedService(service)}>
            {service.title}
          </h2>
        ))}
      </div>
    </div>
  )
}
const Billing = () => (
  <section id="OurWork" className={layout.sectionReverse}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div
      id="features"
      className="flex flex-wrap sm:justify-center justify-center w-full  relative z-[1]"
    >
      {/* <Servicesofferd /> */}
      <Projects />
      {/* <div className={layout.sectionImgReverse}>
      <img src={Bill1} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Building the Future <br className="sm:block hidden" />Turning Visions into Reality.</h2>
      <p className={`${styles.paragraph} max-w[470px] mt-5`}>"Discover our portfolio, a testament to our expertise. From residential marvels to commercial landmarks, explore our diverse projects. Witness the transformative power of our craftsmanship."</p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[127 justify-center" />
      </div>
    </div> */}
    </div>
  </section>
)

export default Billing
