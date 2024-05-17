import styles from "../../style";

const RealEstate = () => {
  return (
    <div>
      <section
        id="clients"
        className={` ${styles.flexCenter} flex flex-col relative ss:pl-10  pl-5 ss:pb-20 pr-5`}
      >
        <div className="flex-1 font-poppins bg-black-gradient-2 w-full font-bold ss:text-[50px] text-[40px] text-white ss:leading-[80.8px] leading-[75px]  items-center text-center rounded-full">
          <h1 className="text-gradient ">Real Estate</h1>
        </div>

        <div className="text-white flex-grow px-24 py-8 justify-center">
          <p className={`${styles.paragraph}  mt-5`}>
            Elevate Your Real Estate Experience with Our Comprehensive Services
            Book a Consultation Today!
          </p>

          <div>
            <h3 className={`${styles.headingSM}  bg-heading `}>
              Service Offerings:
            </h3>
            <p className={`${styles.paragraphSub}  mt-2`}>
              Property Management:Tenant screening and leasing * Rent
              collection and financial reporting Property maintenance and
              repairs * Eviction proceedings and legal assistance
            </p>
          </div>
          <div>
            <h3 className={`${styles.headingSM}  bg-heading `}>
              Property Listing and Marketing
            </h3>
            <p className={`${styles.paragraphSub}  mt-2`}>
              * Professional photography and video tours
              * Online and print marketing campaigns 
              * Social media and digital advertising 
              * **Property Acquisition and Disposition:
              * Buyer and seller representation Market analysis and
              property valuation
            </p>
          </div>
          <div>
            <h3 className={`${styles.headingSM}  bg-heading `}>
              Investment Property Analysis:
            </h3>
            <p className={`${styles.paragraphSub}  mt-2`}>
              * Cash flow projections and return on investment analysis 
              * Tax and legal implications of property ownership 
              * Property management strategy development * 
              **Commercial Real Estate Services:** >
              * Office, retail, and industrial property leasing 
              * Tenant improvement and build-out coordination  Investment
              property acquisition and disposition
            </p>
          </div>
          <div>
            <h3 className={`${styles.headingSM}  bg-heading `}>
              Our Expertise:
            </h3>
            <p className={`${styles.paragraphSub}  mt-2`}>
              **Certified and Experienced Agents:**
             
              Our team of licensed real estate professionals has a deep
              understanding of the industry. 
              *
              **Proven Track Record:** 
              We have a history of successful transactions and satisfied
              clients. 
            </p>
          </div>
          <div>
            <h3 className={`${styles.headingSM}  bg-heading `}>
              Personalized Approach:
            </h3>
            <p className={`${styles.paragraphSub}  mt-2`}>
              We tailor our services to meet your unique needs and goals
            </p>
          </div>
          <div>
            <h3 className={`${styles.headingSM}  bg-heading `}>
              Technology-Driven:
            </h3>
            <p className={`${styles.paragraphSub}  mt-2`}>
              We utilize cutting-edge tools to streamline processes and enhance
              communication.
            </p>
          </div>
          <div>
            <h3 className={`${styles.headingSM}  bg-heading `}>
              Comprehensive Support:
            </h3>
            <p className={`${styles.paragraphSub}  mt-2`}>
              Our team is dedicated to providing end-to-end support throughout
              your real estate journey.
            </p>
          </div>
          <div>
            <h3 className={`${styles.headingSM}  bg-heading `}>
              Benefits for Clients:
            </h3>
            <p className={`${styles.paragraphSub}  mt-2`}>
              **Stress-free Property Management:** >
              Delegate property management tasks to us and enjoy peace of mind.{" "}
             
              **Maximum Property Exposure:** 
              Reach the widest possible audience for your property listings.{" "}
             
              **Strategic Investment Decisions:**{" "}
            </p>{" "}
          </div>

          <div>
            <h3 className={`${styles.headingSM}  bg-heading `}>
              Maximum Property Exposure:
            </h3>
            <p className={`${styles.paragraphSub}  mt-2`}>
              Reach the widest possible audience for your property listings.
            </p>
          </div>

          <div>
            <h3 className={`${styles.headingSM}  bg-heading `}>
              Strategic Investment Decisions
            </h3>
            <p className={`${styles.paragraphSub}  mt-2`}>
              **Expert Representation:**
             
              Trust in our experienced agents to negotiate the best possible
              deals on your behalf. 
              Call to Action:
              .
            </p>
          </div>

          <div>
            <h3 className={`${styles.headingSM}  bg-heading `}>
              Call to Action:
            </h3>
            <p className={`${styles.paragraphSub}  mt-2`}>
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
