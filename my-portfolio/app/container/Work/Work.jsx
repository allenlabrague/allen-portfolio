"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { AiFillEye, AiOutlineLink } from "react-icons/ai";
import { motion, stagger } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";
import Link from "next/link";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filterWork.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else setFilterWork(works.filter((work) => work.tags.includes(item)));
    }, 500);
  };

  return (
    <>
      <h2 className="head-text dark:text-white">
        {" "}
        My Creative <span>Portfolio</span>
      </h2>
      <div className="app__work-filter">
        {["UI/UX", "Modern Web", "FullStack", "Next JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item text-black dark:text-white bg-white app__flex p-text dark:bg-[#383838] ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {currentPosts.map((work, index) => (
          <div
            className="app__work-item app__flex bg-white dark:bg-[#383838]"
            key={index}
          >
            <div className="app__work-img app__flex">
              <Image
                width={300}
                height={300}
                src={urlFor(work.imgUrl).url()}
                alt="work.name"
                className="relative"
              />
              <div className="absolute md:hidden bottom-[40%] mx-auto bg-[#00000080] p-4 rounded-full">
                <Link href={work.projectLink} target="_blank">
                  <AiOutlineLink color="white" fontSize={30} />
                </Link>
              </div>
              <div className="hidden md:block">
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChilldren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <Link
                    href={work.projectLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text text-black dark:text-white">
                {work.title}
              </h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex bg-white dark:bg-[#383838]">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__work"), "work", "app__primarybg");
