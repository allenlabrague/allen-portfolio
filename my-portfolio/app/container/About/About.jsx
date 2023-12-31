"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="text-center capitalize font-extrabold text-[2rem] md:text-5xl">
        {" "}
        I know that{" "}
        <span className="text-[#313bac] font-extrabold">
          Good Development
        </span>{" "}
        <br /> means{" "}
        <span className="text-[#313bac] font-extrabold">Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <Image
              width={300}
              height={300}
              src={urlFor(about.imgUrl).url()}
              alt={about.title}
            />
            <h2
              className="text-base font-extrabold text-left"
              style={{ marginTop: 20 }}
            >
              {about.title}
            </h2>
            <p
              className="text-[0.8rem] text-gray-400 text-left"
              style={{ marginTop: 10 }}
            >
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about");
