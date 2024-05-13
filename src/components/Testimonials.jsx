import { feedback } from "../constants"
import styles from "../style"
import FeedbackCard from "./FeedbackCard"




const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

    <div className="w-full flex justify-between items-center md:flex-col flex-col sm:mb-16 mb-6 relative z-[1] ">
      <h1 className={`${styles.headingSM} flex items-start`} >
        OUR PEOPLE  <br className="sm:block hidden" />
      </h1>
      <div className="w-full flex justify-center md:mt-0 mt-6">
        <p className={`${styles.paragraphSub}  text-left max-w-[800px]`}>
          AVP Elite Projects, we are leaders in the construction industry,
          renowned for our commitment to sustainability and environmental
          stewardship. With a steadfast dedication to excellence, our team
          meticulously executes every project with precision and passion, while
          prioritizing sustainable practices. By choosing us, you not only
          receive superior quality but also contribute to a greener future, as
          we integrate environmentally friendly solutions into our work,
          ensuring a positive impact on the planet for generations to come.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
)


export default Testimonials
