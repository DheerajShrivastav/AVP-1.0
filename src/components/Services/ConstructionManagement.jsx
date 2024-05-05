import { constructionManagement } from '../../constants'
import styles from '../../style'
import FeedbackCard from '../FeedbackCard'
const ConstructionManagementProjects = () => {
  return (
    <div>
      <div className="text-white">
        <div >Building Construction and Management</div>
        Welcome to AVP Engineers Group, where excellence meets innovation in the
        realm of building construction and management. With a profound
        commitment to quality and precision, we offer a comprehensive array of
        services tailored to meet your construction needs. <br />
        Our expert team of engineers, architects, and project managers
        collaborate seamlessly to deliver outstanding results in every project
        we undertake. From conceptualization to completion, we ensure that each
        step is executed with utmost professionalism and attention to detail.{' '}
        <br />
        At AVP Engineers Group, we specialize in: <br />
        1. Construction Management: Our seasoned professionals oversee every
        aspect of your construction project, from budgeting and scheduling to
        procurement and subcontractor management. With our proactive approach,
        we ensure smooth progress and timely completion, adhering to the highest
        standards of quality. <br />
        2. Design and Engineering: Harnessing the latest technology and
        innovative design principles, we bring your visions to life. Whether
        it's architectural design, structural engineering, or MEP services, our
        team combines creativity with technical expertise to create functional,
        sustainable, and aesthetically pleasing spaces. <br />
        3. Project Planning and Development: From feasibility studies and site
        analysis to zoning approvals and permit procurement, we guide you
        through the complexities of project planning and development. Our
        strategic insights and meticulous planning pave the way for successful
        project execution and optimal outcomes. <br />
        4. Quality Assurance and Control: Quality is the cornerstone of our
        operations. Through rigorous quality assurance processes and diligent
        quality control measures, we ensure that every aspect of your project
        meets or exceeds industry standards. Our commitment to excellence is
        unwavering, resulting in superior craftsmanship and enduring structures.
        <br />
        5. Facility Management: Beyond construction, we offer comprehensive
        facility management services to maximize the efficiency and longevity of
        your built environment. From maintenance planning and energy
        optimization to space utilization and tenant satisfaction, we optimize
        the performance of your facility, enhancing its value and functionality.{' '}
        <br />
        At AVP Engineers Group, we are driven by a passion for innovation and a
        dedication to exceeding client expectations. Whether you're embarking on
        a new construction project or seeking to optimize your existing
        facilities, trust us to deliver exceptional results, every time. Let us
        be your partner in building success.
      </div>
      <section
        id="clients"
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
      >
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
        <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
          {constructionManagement.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ConstructionManagementProjects
