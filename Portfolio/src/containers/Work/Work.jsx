import React, { useState } from "react";
import "./Work.scss";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { AppWrap } from "../../Wrapper";
import work from "../../constants/work";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({
    y: 0,
    opacity: 1,
  });

  const handelWorkFilter = (item) => {};
  const tags = ["React JS ", "Node JS", "JavaScript", "Next JS", "Sanity.io"];
  return (
    <>
      <h1 className="head-text">
        <span>My Projects</span>
      </h1>
      <motion.div
        className="app__work-filter"
        whileInView={{ y: [90, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        {tags.map((item, i) => (
          <div
            key={i}
            onClick={() => handelWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </motion.div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {work.map((work, i) => (
          <motion.div
            className="app__work-item app__flex"
            key={i}
            whileInView={{ y: [90, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3 }}
          >
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.name}</h4>
              <div className="app__work-flex">
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <button className="p-text">Project</button>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <button className="p-text">Code</button>
                </a>
              </div>
              <p className="p-text" style={{ marginTop: "10px" }}>
                {work.title}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.catigory}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, "work");
