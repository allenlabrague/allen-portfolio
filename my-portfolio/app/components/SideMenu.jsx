"use client";

import { motion, useCycle, AnimatePresence, easeIn } from "framer-motion";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiFillLinkedin, AiOutlineClose } from "react-icons/ai";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { ThemeSwitcher } from "./ThemeSwitcher";

const sideVariants = {
  initial: {
    x: "100%",
  },
  enter: {
    x: "0%",
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const sideItemVariants = {
  initial: {
    x: "80px",
  },
  enter: {
    x: "0%",
    transition: {
      staggerChildren: 0.2,
      staggerDirections: 1,
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    x: "80px",
    transition: {
      staggerChildren: 0.2,
      staggerDirections: -1,
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const SideMenu = () => {
  const [open, cycleOpen] = useCycle(false, true);

  const handleLinkClick = () => {
    cycleOpen();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={sideVariants}
            className="bg-white fixed top-[4.2rem] dark:dark:bg-[#383838] left-0 h-screen p-5 w-full"
          >
            <motion.ul className="flex flex-col items-start gap-5 p-10">
              <p className="uppercase text-xs text-gray-500">navigation</p>
              <Divider className="my-4" />
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <motion.ul
                  variants={sideItemVariants}
                  key={item}
                  className="flex flex-col gap-5 items-start text-2xl uppercase"
                >
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-left"
                    onClick={(e) => {
                      handleLinkClick();
                      stopPropagation(e);
                    }}
                  >
                    <motion.a
                      whileHover={{
                        opacity: 0.6,
                      }}
                      transition={easeIn}
                      href={`#${item}`}
                    >
                      {item}
                    </motion.a>
                  </motion.li>
                </motion.ul>
              ))}
              <motion.div
                variants={sideItemVariants}
                className="flex flex-col w-full items-center gap-3"
              >
                <Divider className="my-4" />
                <div className="flex items-center gap-6">
                  <motion.div
                    whileHover={{ scale: 1.1, opacity: 0.6 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="mailto:allenlabrague06@gmail.com"
                      target="_blank"
                    >
                      <BiLogoGmail fontSize={30} />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, opacity: 0.6 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="https://www.facebook.com/allen.labrague.75"
                      target="_blank"
                    >
                      <FaFacebook fontSize={30} />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, opacity: 0.6 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="https://www.linkedin.com/in/allen-labrague-aa2a35273/"
                      target="_blank"
                    >
                      <AiFillLinkedin fontSize={30} />
                    </Link>
                  </motion.div>
                </div>
                <Divider className="my-4" />
                <ThemeSwitcher />
              </motion.div>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        {open ? (
          <button onClick={cycleOpen}>
            <AiOutlineClose fontSize={25} />
          </button>
        ) : (
          <button onClick={cycleOpen}>
            <HiMenuAlt2 fontSize={25} />
          </button>
        )}
      </div>
    </>
  );
};

export default SideMenu;
