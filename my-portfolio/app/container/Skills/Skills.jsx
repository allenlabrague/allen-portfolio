"use client";

import React from "react";
import Image from "next/image";

import { useState, useEffect } from "react";
import { motion, stagger } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { FaCaretLeft } from "react-icons/fa";

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

      <div className="app__skills-container">
        <div className="app__skills-list h-min">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill._id}
            >
              <div className="app__flex bg-[#EDF2F8] dark:dark:bg-[#383838]">
                <Image
                  width={300}
                  height={300}
                  src={urlFor(skill.icon).url()}
                  alt={skill.name}
                  className=""
                />
              </div>
              <p className="text-[0.8rem] text-left">{skill.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="app__skills-exp ">
          {experience?.map((experience) => (
            <div className="app__skills-exp-item" key={experience._id}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <div className="app_skills-exp-works w-full">
                {experience.works.map((work) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work w-full"
                    key={work._id}
                  >
                    <Accordion>
                      <AccordionItem
                        subtitle={
                          <p className="text-[0.8rem] text-gray-400 text-left">
                            {work.company}
                          </p>
                        }
                        title={
                          <h4 className="text-base font-extrabold text-left cursor-pointer -mt-3">
                            {work.name}
                          </h4>
                        }
                        aria-label={work.name}
                        key={work.desc}
                        indicator={<FaCaretLeft />}
                      >
                        <p>{work.desc}</p>
                      </AccordionItem>
                    </Accordion>
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
