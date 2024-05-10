import styles from "../style";
import { discount, robot, Homelmg } from "../assets";
import GetStarted from "./GetStarted";
import React from "react";
import "animate.css";
import { p } from "../assets/images";
import  Avp_bg_video  from "../assets/Avp-bg-video.mp4";
const Hero = () => {
  return (
    <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src={Avp_bg_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  )
};

export default Hero;
