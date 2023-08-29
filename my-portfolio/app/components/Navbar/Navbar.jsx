"use client";

import SideMenu from "../SideMenu";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "../ThemeSwitcher";

import "./Navbar.scss";

const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1,
    },
  },
};

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="app__navbar dark:dark:bg-[#383838]"
    >
      <h2 className="text-3xl uppercase text-black font-semibold dark:text-white">
        Allen
      </h2>
      <ul className="hidden lg:flex items-center justify-center gap-10 uppercase dark:text-white">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li
            className="app__flex p-text dark:text-white hover:text-[#313bac]"
            key={`link-${item}`}
          >
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="hidden lg:block">
        <ThemeSwitcher />
      </div>
      <div className="lg:hidden">
        <SideMenu />
      </div>
    </motion.nav>
  );
};

export default Navbar;
