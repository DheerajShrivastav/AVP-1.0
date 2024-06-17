import { constructionManagement } from '../../constants'
import styles from '../../style'
import FeedbackCard from '../FeedbackCard'
const ConstructionManagementProjects = () => {
  return (
    <section
      id="clients"
      className={` ${styles.flexCenter} flex flex-col ss:pl-10  pl-5 ss:pb-20 pr-5`}
    >
      <div className="flex-1 font-poppins bg-black/50 m-0  w-full font-bold ss:text-[50px] text-[40px] text-black ss:leading-[80.8px] leading-[75px]  items-center text-center fixed top-36">
        <h1 className="text-white ">Building Construction and Management</h1>
      </div>

      <div className="text-white flex-grow px-24 py-8 justify-center pt-52">
        <p className={`${styles.serviceParagraph}  mt-5`}>
          Welcome to AVP Engineers Group, where excellence meets innovation in
          the realm of building construction and management. With a profound
          commitment to quality and precision, we offer a comprehensive array of
          services tailored to meet your construction needs. Our expert team of
          engineers, architects, and project managers collaborate seamlessly to
          deliver outstanding results in every project we undertake. From
          conceptualization to completion, we ensure that each step is executed
          with utmost professionalism and attention to detail.
        </p>
        <h2 className={`${styles.serviceHeading} `}>
          At AVP Engineers Group, we specialize in:
        </h2>{' '}
        <br />
        <div>
          <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
            1. Construction Management:
          </h3>
          <p className={`${styles.serviceParagraphSub}  mt-2`}>
            Our seasoned professionals oversee every aspect of your construction
            project, from budgeting and scheduling to procurement and
            subcontractor management. With our proactive approach, we ensure
            smooth progress and timely completion, adhering to the highest
            standards of quality
          </p>
        </div>
        <div className="mt-3">
          <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
            2. Design and Engineering:
          </h3>
          <p className={`${styles.serviceParagraphSub}  mt-2`}>
            Harnessing the latest technology and innovative design principles,
            we bring your visions to life. Whether it's architectural design,
            structural engineering, or MEP services, our team combines
            creativity with technical expertise to create functional,
            sustainable, and aesthetically pleasing spaces.
          </p>
        </div>
        <div className="mt-3">
          <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
            3. Project Planning and Development:
          </h3>
          <p className={`${styles.serviceParagraphSub}  mt-2`}>
            From feasibility studies and site analysis to zoning approvals and
            permit procurement, we guide you through the complexities of project
            planning and development. Our strategic insights and meticulous
            planning pave the way for successful project execution and optimal
            outcomes.
          </p>
        </div>
        <div className="mt-3">
          <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
            4. Quality Assurance and Control:
          </h3>
          <p className={`${styles.serviceParagraphSub}  mt-2`}>
            Quality is the cornerstone of our operations. Through rigorous
            quality assurance processes and diligent quality control measures,
            we ensure that every aspect of your project meets or exceeds
            industry standards. Our commitment to excellence is unwavering,
            resulting in superior craftsmanship and enduring structures.
          </p>
        </div>
        <div className="mt-3">
          <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
            5. Facility Management:
          </h3>
          <p className={`${styles.serviceParagraphSub}  mt-2`}>
            Beyond construction, we offer comprehensive facility management
            services to maximize the efficiency and longevity of your built
            environment. From maintenance planning and energy optimization to
            space utilization and tenant satisfaction, we optimize the
            performance of your facility, enhancing its value and functionality.
          </p>
        </div>
        <div className={`${styles.serviceParagraph}  mt-2`}>
          At AVP Engineers Group, we are driven by a passion for innovation and
          a dedication to exceeding client expectations. Whether you're
          embarking on a new construction project or seeking to optimize your
          existing facilities, trust us to deliver exceptional results, every
          time. Let us be your partner in building success.
        </div>
      </div>

      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
        {constructionManagement.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default ConstructionManagementProjects
