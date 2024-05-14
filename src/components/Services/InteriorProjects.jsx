import { interiorProjects } from '../../constants'
import styles from '../../style'
import FeedbackCard from '../FeedbackCard'
const InteriorProjects = () => {
  return (
    <section
      id="clients"
      className={` ${styles.flexCenter} flex flex-col relative ss:pl-0  pl-0 ss:pb-20 pr-0 `}
    >
      <div className="flex-1 font-poppins bg-black/50 m-0  w-full font-bold ss:text-[50px] text-[40px] text-black ss:leading-[80.8px] leading-[75px]  items-center text-center fixed top-36 ">
        <h1 className="text-white ">Interior Design</h1>
      </div>

      <div className="text-black flex-grow px-24 py-8 justify-center pt-52 ">
        <p className={`${styles.serviceParagraph}  mt-5`}>
          At AVP Engineers Group, we specialize in transforming interior spaces
          into captivating and functional environments that exceed expectations.
          With our expertise in interior design, we offer a comprehensive range
          of services tailored to meet the unique needs of each client. Our team
          of skilled engineers and designers is dedicated to delivering
          exceptional results, blending creativity with technical proficiency to
          bring your vision to life. Whether you're looking to revamp your
          residential space or enhance your commercial property, we have the
          knowledge and experience to handle projects of any scale.
        </p>
        <h2 className={`${styles.serviceHeading} `}>Our services include:</h2>{' '}
        <br />
        <div>
          <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
            1. Concept Development:
          </h3>
          <p className={`${styles.serviceParagraphSub} text-black mt-2`}>
            We work closely with you to understand your goals, preferences, and
            requirements, crafting innovative concepts that reflect your vision
            and aspirations.
          </p>
        </div>
        <div className="mt-3">
          <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
            2. Space Planning:
          </h3>
          <p className={`${styles.serviceParagraphSub}  mt-2`}>
            Using advanced techniques and software, we optimize the layout of
            your space to maximize functionality, flow, and efficiency while
            ensuring aesthetic appeal.
          </p>
        </div>
        <div className="mt-3">
          <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
            3. Interior Design:
          </h3>
          <p className={`${styles.serviceParagraphSub}  mt-2`}>
            From selecting furniture and finishes to coordinating colors and
            textures, we meticulously design every aspect of your interior to
            create a harmonious and inviting atmosphere.
          </p>
        </div>
        <div className="mt-3">
          <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
            4. Lighting Design:
          </h3>
          <p className={`${styles.serviceParagraphSub}  mt-2`}>
            We incorporate cutting-edge lighting solutions to enhance ambiance,
            highlight architectural features, and create the perfect mood for
            any setting.
          </p>
        </div>
        <div className="mt-3">
          <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
            5. Custom Solutions:
          </h3>
          <p className={`${styles.serviceParagraphSub}  mt-2`}>
            Our team has the expertise to develop bespoke solutions tailored to
            your specific needs, whether it's custom furniture, built-in
            storage, or unique design elements.
          </p>
        </div>
        <div className="mt-3">
          <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
            6. Project Management:
          </h3>
          <p className={`${styles.serviceParagraphSub}  mt-2`}>
            We oversee every stage of the project, from initial concept to final
            installation, ensuring seamless execution and timely completion
            while adhering to budget constraints.
          </p>
        </div>
        <div className={`${styles.serviceParagraph}  mt-2`}>
          At AVP Engineers Group, we are committed to excellence in design,
          craftsmanship, and customer satisfaction. Let us elevate your interior
          spaces to new heights and create environments that inspire, delight,
          and endure. <br />
          Contact us today to discuss your project and discover the difference
          our expertise can make.
        </div>
      </div>

      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
        {interiorProjects.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default InteriorProjects
