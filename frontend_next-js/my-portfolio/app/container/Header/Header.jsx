"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";

import { AppWrap } from "../../wrapper";
import AnimationBlob from "../../../public/assets/blue-blob.json";
import AnimationHand from "../../../public/assets/handhello.json";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div className="w-full">
              <Lottie className="w-[70px] " animationData={AnimationHand} />
            </div>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am </p>
              <h1 className="head-text">Allen</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Computer Science Student</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src="/assets/metaverse-people.png" alt="profile_bg" />

        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src="/assets/circle.svg"
          alt="profile-circle"
          className="overlay_circle"
        >
          <Lottie animationData={AnimationBlob} />
        </motion.div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[
          <img src="/assets/react.png" />,
          <img src="/assets/tailwind-logo.svg" />,
          <img src="/assets/next-js-logo.svg" />,
        ].map((images, index) => (
          <div className="circle-cmp app__flex" key={index}>
            <img src={images.props.src} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home", "app__primarybg");
