import "./Skills.scss";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import skills from "../../constants/Skills";
const Skills = () => {
  return (
    <>
      <h2 className="head-text">
        <span>Skills & Experience</span>
      </h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, i) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.icon}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt="skill icon" />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {skills.map((exp, i) => (
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
                data-tip
                key={exp.icon}
                data-for={exp.name}
              >
                <h4 className="bold-text">{exp.skill}</h4>
                <h4 className="p-text">{exp.exp}</h4>
                <p className="p-text">{exp.year}</p>
              </motion.div>
            </>
          ))}
        </motion.div>
      </div>
    </>
  );
};
export default AppWrap(Skills, "skills");
