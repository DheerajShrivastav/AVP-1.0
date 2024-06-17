import styles from '../../style'

const RealEstate = () => {
  return (
    <div>
      <section
        id="clients"
        className={` ${styles.flexCenter} flex flex-col ss:pl-0  pl-0 ss:pb-20 pr-0 `}
      >
        <div className="flex-1 font-poppins bg-black/50 m-0  w-full font-bold ss:text-[50px] text-[40px] text-black ss:leading-[80.8px] leading-[75px]  items-center text-center fixed top-36 ">
          <h1 className="text-white ">Real Estate</h1>
        </div>

        <div className="text-black flex-grow px-24 py-8 justify-center pt-52 ">
          <p className={`${styles.serviceParagraph}  mt-5`}>
            Elevate Your Real Estate Experience with Our Comprehensive Services
            Book a Consultation Today!
          </p>

          <div>
            <h2 className={`${styles.serviceHeading} `}>
              Our services include:
            </h2>{' '}
            <div>
              <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
                Property Management:
              </h3>
              <p className={`${styles.serviceParagraphSub}  mt-2`}>
                Tenant screening and leasing <br />
                Rent collection and financial reporting Property maintenance and
                repairs <br />
                Eviction proceedings and legal assistance <br />
                <br />
              </p>
            </div>
          </div>
          <div>
            <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
              1. Property Listing and Marketing
            </h3>
            <p className={`${styles.serviceParagraphSub}  mt-2`}>
              Professional photography and video tours <br />
              Online and print marketing campaigns <br />
              Social media and digital advertising <br />
              Property Acquisition and Disposition: Buyer and seller
              representation Market analysis and property valuation
            </p>
          </div>
          <div>
            <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
              Investment Property Analysis:
            </h3>
            <p className={`${styles.serviceParagraphSub}  mt-2`}>
              Cash flow projections and return on investment analysis <br /> Tax
              and legal implications of property ownership <br /> Property
              management strategy development <br />
              <b>Commercial Real Estate Services: </b> <br />
              Office, retail, and industrial property leasing <br />
              Tenant improvement and build-out coordination Investment property
              acquisition and disposition
            </p>
          </div>
          <div>
            <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
              Our Expertise:
            </h3>
            <p className={`${styles.serviceParagraphSub}  mt-2`}>
              <b>Certified and Experienced Agents: </b>
              <br />
              Our team of licensed real estate professionals has a deep
              understanding of the industry. <br />
              <b>Proven Track Record: </b> <br /> We have a history of
              successful transactions and satisfied clients.
            </p>
          </div>
          <div>
            <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
              Personalized Approach:
            </h3>
            <p className={`${styles.serviceParagraphSub}  mt-2`}>
              We tailor our services to meet your unique needs and goals
            </p>
          </div>
          <div>
            <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
              Technology-Driven:
            </h3>
            <p className={`${styles.serviceParagraphSub}  mt-2`}>
              We utilize cutting-edge tools to streamline processes and enhance
              communication.
            </p>
          </div>
          <div>
            <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
              Comprehensive Support:
            </h3>
            <p className={`${styles.serviceParagraphSub}  mt-2`}>
              Our team is dedicated to providing end-to-end support throughout
              your real estate journey.
            </p>
          </div>
          <div>
            <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
              Benefits for Clients:
            </h3>
            <p className={`${styles.serviceParagraphSub}  mt-2`}>
              <b> Stress-free Property Management:</b> Delegate property
              management tasks to us and enjoy peace of mind. <br />
              <b>Maximum Property Exposure:</b>
              Reach the widest possible audience for your property listings.
            </p>{' '}
          </div>

          <div>
            <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
              Maximum Property Exposure:
            </h3>
            <p className={`${styles.serviceParagraphSub}  mt-2`}>
              Reach the widest possible audience for your property listings.
            </p>
          </div>

          <div>
            <h3 className={`${styles.serviceHeadingSM}  bg-heading `}>
              Strategic Investment Decisions
            </h3>
            <p className={`${styles.serviceParagraphSub}  mt-2`}>
              <b>Expert Representation:</b>  Trust in our experienced agents to
              negotiate the best possible deals on your behalf. 
              .
            </p>
          </div>

          <div>
          
            <p className={`${styles.serviceParagraphSub}  mt-2`}>
              Don't settle for ordinary real estate services. Partner with us
              for exceptional service and unparalleled results. Book a
              consultation today to discuss your needs and explore how we can
              elevate your real estate experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default RealEstate;
