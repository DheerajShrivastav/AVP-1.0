import styles from "../style";
import { discount, robot, Homelmg } from "../assets";
import GetStarted from "./GetStarted";
import React from "react";
import "animate.css";
import { p } from "../assets/images";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 animate__animated animate__backInUp animate__delay-2s">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 `}>
            <span className="text-white">Book</span> you'r{" "}
            <span className="text-white">call</span> now
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full animate__animated  animate__pulse animate__delay-2s">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Where <br className="sm:block hidden" />{' '}
            <span className="text-gradient animate__animated animate__fadeInUp animate__delay-1s ">
              Invonation
            </span>{' '}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Meet Construction.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          AVP Engineer's Group <br />  ALIVE VIVACIOUS
          PERSISTING <br /> Crafting Legacies with Perfection <br /> Efficiently Realizing
          Customer's Dreams
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative animate__animated animate__fadeInTopRight  `}
      >
        <img
          src={Homelmg}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* adding the video  */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          src={p}
          className="relative z-[5] w-[90%] h-[90%] rounded-[30px]"
        ></video> */}

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
