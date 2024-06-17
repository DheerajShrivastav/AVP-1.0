import styles from '../../style'
import FeedbackCard from '../FeedbackCard'
import { ArchitectureWorkConstant } from '../../constants'
const ArchitectureWork = () => {
  return (
    <section
      id="clients"
      className={` ${styles.flexCenter} flex flex-col ss:pl-0  pl-0 ss:pb-20 pr-0 `}
    >
      <div className="flex-1 font-poppins bg-black/50 m-0  w-full font-bold ss:text-[50px] text-[40px] text-black ss:leading-[80.8px] leading-[75px]  items-center text-center fixed top-36 ">
        <h1 className="text-white ">Architecture Work</h1>
      </div>
      <div className="text-black flex-grow px-24 py-8 justify-center pt-52 ">
        <p className={`${styles.serviceParagraph}  mt-5`}>
          At AVP Engineers Group, we specialize in providing exceptional
          architectural solutions tailored to meet the unique needs of our
          clients. With a wealth of experience and a commitment to innovation,
          we deliver comprehensive services that encompass every aspect of
          architectural design and engineering. <br />
          Our team of skilled professionals is dedicated to delivering
          excellence in every project we undertake. From conceptualization to
          execution, we offer a full range of architectural services, including:
        </p>
        <h2 className={`${styles.serviceHeading} `}>
          Our services include:
        </h2>{' '}
        <br />
        <div>
          <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
            1. Architectural Design:
          </h3>
          <p className={`${styles.serviceParagraphSub} text-black mt-2`}>
            Utilizing the latest technology and design principles, we create
            innovative architectural designs that blend functionality with
            aesthetics. Whether it's residential, commercial, or industrial
            projects, we strive to exceed expectations with our creative
            solutions.
          </p>
        </div>
        <div>
          <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
            2. Design Consultation:
          </h3>
          <p className={`${styles.serviceParagraphSub} text-black mt-2`}>
            We collaborate closely with our clients to understand their vision,
            goals, and requirements. Our design consultations ensure that every
            project reflects the client's preferences while adhering to industry
            standards and regulations.{' '}
          </p>
        </div>
        <div>
          <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
            3. Sustainable Design:
          </h3>
          <p className={`${styles.serviceParagraphSub} text-black mt-2`}>
            As advocates for sustainable design practices, we integrate
            environmentally friendly solutions into our architectural projects.
            From energy-efficient design strategies to green building materials,
            we strive to minimize environmental impact while maximizing
            efficiency and comfort.{' '}
          </p>
        </div>
        <div className={`${styles.serviceParagraph}  mt-2`}>
          As advocates for sustainable design practices, we integrate
          environmentally friendly solutions into our architectural projects.
          From energy-efficient design strategies to green building materials,
          we strive to minimize environmental impact while maximizing efficiency
          and comfort. <br />
          <br />
          <hr />
          <br />
          At AVP Engineers Group, we are committed to delivering excellence in
          every project we undertake. Our dedication to quality, innovation, and
          client satisfaction sets us apart as a trusted partner in the field of
          architecture. Contact us today to learn more about how we can bring
          your architectural vision to life.
        </div>
      </div>
      
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
        {ArchitectureWorkConstant.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}
export default ArchitectureWork
