"use client";

import React from "react";
import Image from "next/image";

import { useState, useEffect } from "react";
import { motion, stagger } from "framer-motion";
import { Tooltip } from "@nextui-org/react";

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

  const tooltipStyle = {
    maxWidth: "300px",
    backgroundColor: "var(--white-color)",
    boxShadow: "0 0 25px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    padding: "1rem",
    color: "var(--gray-color)",
    textAlign: "center",
    lineHeight: "1.5",
    opacity: "1",

    "@media screen and (min-width: 2000px)": {
      fontSize: "1.75rem",
      maxWidth: "500px",
      lineHeight: "2",
    },
  };

  return (
    <>
      <h2 className="text-center capitalize font-extrabold text-[2rem] md:text-5xl">
        Skills & Experience
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
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
        </motion.div>
        <motion.div className="app__skills-exp">
          {experience?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app_skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work mb-3"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <Tooltip
                        placement="right"
                        content={work.desc}
                        color="invert"
                      >
                        <h4 className="text-base font-extrabold text-left">
                          {work.name}
                        </h4>
                      </Tooltip>
                      <p className="text-[0.8rem] text-gray-400 text-left">
                        {work.company}
                      </p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills");
