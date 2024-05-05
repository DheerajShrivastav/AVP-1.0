import styles, { layout } from '../style'
import { servicesSection } from '../constants'
import FeedbackCard from './FeedbackCard'

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

const Billing = () => (
  <section id="OurWork" className={layout.sectionReverse}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div
      id="features"
      className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]"
    >
      <Servicesofferd />
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
