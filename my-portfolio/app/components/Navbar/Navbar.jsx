"use client";

import Link from "next/link";

import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import { useState } from "react";
import Image from "next/image";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import "./Navbar.scss";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const [toggle, setToggle] = useState(false);
  const currentTheme = theme === "system" ? {} : theme;

  return (
    <div className="app__navbar">
      <h2 className="text-3xl uppercase text-black font-semibold">Allen</h2>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="hidden lg:block">
        {currentTheme === "dark" ? (
          <Image
            className="cursor-pointer"
            width={70}
            height={70}
            src="/assets/sun.svg"
            alt="moon-logo"
            onClick={() => setTheme("light")}
          />
        ) : (
          <Image
            className="cursor-pointer"
            width={70}
            height={70}
            src="/assets/moon.svg"
            alt="sun-logo"
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 1.5, type: "spring" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <span className="flex items-center mb-4">
                <h3>
                  <Link href="mailto:allenlabrague06@gmail.com" target="_blank">
                    <BiLogoGmail />
                  </Link>
                </h3>
                <h3>
                  <Link
                    href="https://www.facebook.com/allen.labrague.75"
                    target="_blank"
                  >
                    <FaFacebook />
                  </Link>
                </h3>
                <h3>
                  <Link
                    href="https://www.linkedin.com/in/allen-labrague-aa2a35273/"
                    target="_blank"
                  >
                    <AiFillLinkedin />
                  </Link>
                </h3>
              </span>

              <span className="flex items-center flex-col ml-4 gap-1">
                <h3 className="text-black font-semibold">Dark Mode :</h3>
                {currentTheme === "dark" ? (
                  <Image
                    src="/assets/sun.svg"
                    width={70}
                    height={70}
                    alt="moon-logo"
                    onClick={() => setTheme("light")}
                  />
                ) : (
                  <Image
                    src="/assets/moon.svg"
                    width={70}
                    height={70}
                    alt="sun-logo"
                    onClick={() => setTheme("dark")}
                    className="cursor-pointer"
                  />
                )}
              </span>
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
