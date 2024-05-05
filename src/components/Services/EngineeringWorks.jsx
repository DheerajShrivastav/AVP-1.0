import { engineeringWorks } from '../../constants'
import styles from '../../style'
import FeedbackCard from '../FeedbackCard'
const EngineeringWorksProjects = () => {
  return (
    <div>
      <section
        id="clients"
        className={` ${styles.flexCenter} flex flex-col relative ss:pl-10  pl-5 ss:pb-20 pr-5`}
      >
        <div className="flex-1 font-poppins bg-black-gradient-2 w-full font-bold ss:text-[50px] text-[40px] text-white ss:leading-[80.8px] leading-[75px]  items-center text-center rounded-full">
          <h1 className="text-gradient ">Engineering Works</h1>
        </div>

        <div className="text-white flex-grow px-24 py-8 justify-center">
          <p className={`${styles.paragraph}  mt-5`}>
            AVP Engineers Group is a leading provider of innovative civil
            engineering solutions, dedicated to shaping the built environment
            with precision and expertise. With a legacy of excellence and a
            commitment to pushing boundaries, we offer a comprehensive suite of
            services tailored to meet the evolving needs of our clients.
          </p>
          <h2 className={`${styles.heading} `}>Our services include:</h2> <br />
          <div>
            <h3 className={`${styles.headingSM}  bg-heading `}>
              1. Infrastructure Design and Development:
            </h3>
            <p className={`${styles.paragraphSub}  mt-2`}>
              From roads and highways to bridges and tunnels, our team of
              skilled civil engineers excels in designing resilient and
              sustainable infrastructure solutions. Utilizing state-of-the-art
              technology and industry best practices, we deliver designs that
              optimize performance, enhance safety, and improve connectivity for
              communities.
            </p>
          </div>
          <div className="mt-3">
            <h3 className={`${styles.headingSM}  bg-heading `}>
              2. Site Development:
            </h3>
            <p className={`${styles.paragraphSub}  mt-2`}>
              Whether you're planning a residential subdivision, a commercial
              complex, or an industrial facility, our site development services
              provide the foundation for success. We specialize in site grading,
              drainage design, utility coordination, and regulatory compliance,
              ensuring that your projects are executed efficiently and
              cost-effectively.
            </p>
          </div>
          <div className="mt-3">
            <h3 className={`${styles.headingSM}  bg-heading `}>
              3. Structural Engineering
            </h3>
            <p className={`${styles.paragraphSub}  mt-2`}>
              Our structural engineering expertise encompasses a wide range of
              structures, from high-rise buildings to specialty structures. With
              a focus on innovation and efficiency, we employ advanced analysis
              tools and methodologies to design structures that withstand the
              test of time while optimizing material usage and construction
              costs.
            </p>
          </div>
          <div className="mt-3">
            <h3 className={`${styles.headingSM}  bg-heading `}>
              4. Geotechnical Engineering:
            </h3>
            <p className={`${styles.paragraphSub}  mt-2`}>
              Understanding the complex interaction between soil, rock, and
              structures is crucial in ensuring the stability and performance of
              civil engineering projects. Our geotechnical engineering services
              include site investigations, foundation design, slope stability
              analysis, and earthwork recommendations, providing comprehensive
              solutions to mitigate risks and maximize project success.
            </p>
          </div>
          <div className="mt-3">
            <h3 className={`${styles.headingSM}  bg-heading `}>
              5. Construction Management:
            </h3>
            <p className={`${styles.paragraphSub}  mt-2`}>
              :** At AVP Engineers Group, we recognize the importance of
              seamless project execution in delivering successful outcomes. Our
              construction management team works closely with clients and
              contractors to oversee every aspect of the construction process,
              from scheduling and budgeting to quality control and safety
              assurance, ensuring that projects are completed on time and within
              budget.
            </p>
          </div>
          <div className="mt-3">
            <h3 className={`${styles.headingSM}  bg-heading `}>
              6. Environmental Engineering:
            </h3>
            <p className={`${styles.paragraphSub}  mt-2`}>
              Sustainability and environmental stewardship are central to our
              approach to civil engineering. Our environmental engineering
              services encompass environmental impact assessments, remediation
              strategies, stormwater management, and sustainable design
              practices, helping clients minimize their environmental footprint
              and achieve regulatory compliance.
            </p>
          </div>
          <div className={`${styles.paragraph}  mt-2`}>
            From concept to completion, AVP Engineers Group is your trusted
            partner in realizing your civil engineering vision. Contact us today
            to learn more about how we can collaborate to bring your projects to
            life with excellence and innovation.
            <br />
            Contact us today to discuss your project and discover the difference
            our expertise can make.
          </div>
        </div>

        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
        <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
          {engineeringWorks.map((card) => (
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </div>

    
  )
}

export default EngineeringWorksProjects
