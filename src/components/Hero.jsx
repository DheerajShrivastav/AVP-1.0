import styles from "../style";
import { discount, robot, Homelmg } from "../assets";
import GetStarted from "./GetStarted";
import React from "react";
import "animate.css";
import { p } from "../assets/images";
import  Avp_bg_video  from "../assets/Avp-bg-video.mp4";
import Navbar from './Navbar'
const Hero = () => {
  return (
    <header
      className="relative inset-0 flex items-start  h-screen mb-12 overflow-hidden "
      // className="absolute inset-0 overflow-hidden z-0"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        // className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        className="absolute  top-0 left-0 w-full h-full min-w-full min-h-full max-w-none object-cover "
      >
        <source src={Avp_bg_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Navbar />
    </header>
  )
};

export default Hero;
