"use client";

import React from "react";
import Image from "next/image";

import { useState, useEffect } from "react";
import { motion, stagger } from "framer-motion";
import Tooltip from "./Tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperience(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="text-center capitalize font-extrabold text-[2rem] md:text-5xl">
        Skills & Experience
      </h2>

      <div className="app__skills-container relative">
        <div className="app__skills-list md:absolute md:right-[40%] md:top-0">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill._id}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <Image
                  width={300}
                  height={300}
                  src={urlFor(skill.icon).url()}
                  alt={skill.name}
                />
              </div>
              <p className="text-[0.8rem] text-left">{skill.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="app__skills-exp md:ml-[55%]">
          {experience?.map((experience) => (
            <div className="app__skills-exp-item" key={experience._id}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <div className="app_skills-exp-works">
                {experience.works.map((work) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work mb-3"
                    key={work._id}
                  >
                    <Tooltip text={work.desc}>
                      <h4 className="text-base font-extrabold text-left cursor-pointer">
                        {work.name}
                      </h4>
                    </Tooltip>
                    <p className="text-[0.8rem] text-gray-400 text-left">
                      {work.company}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills");
