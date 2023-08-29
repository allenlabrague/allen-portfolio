"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";

import { HeaderWrap } from "../../wrapper";
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
    <div className="app__header app__flex dark:bg-[#121212]">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex dark:dark:bg-[#383838]">
            <div className="w-full">
              <Lottie className="w-[70px] " animationData={AnimationHand} />
            </div>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text dark:text-white">Hello, I am </p>
              <h1 className="head-text dark:text-white">Allen</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex dark:dark:bg-[#383838]">
            <p className="p-text dark:text-white">Front End Developer</p>
            <p className="p-text dark:text-white">Computer Science Student</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <Image
          width={700}
          height={700}
          src="/assets/metaverse-people.png"
          alt="profile_bg"
          priority
        />

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
        <div className="circle-cmp app__flex dark:dark:bg-[#383838]">
          <Image
            width={300}
            height={300}
            src="/assets/react.png"
            alt="circle"
          />
        </div>
        <div className="circle-cmp app__flex dark:dark:bg-[#383838]">
          <Image
            width={300}
            height={300}
            src="/assets/next-js-logo.svg"
            alt="circle"
          />
        </div>
        <div className="circle-cmp app__flex dark:dark:bg-[#383838]">
          <Image
            width={300}
            height={300}
            src="/assets/tailwind-logo.svg"
            alt="circle"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeaderWrap(Header, "home", "app__primarybg");
