import React, { useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

import AboutMe from "../../constants/AboutMe";
import { AppWrap } from "../../Wrapper";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const abouts = [
  {
    title: "Web Development",
    description: "Iam an web developer",
    imgUrl: images.about01,
  },
  {
    title: "Frontend Development",
    description: "Iam  very good frontend  ",
    imgUrl: images.about02,
  },
  {
    title: "Backend Development",
    description: "I love backend development ",
    imgUrl: images.about03,
  },
  {
    title: "Full stack",
    description: "My job is a full stack developer",
    imgUrl: images.about04,
  },
];
const About = () => {
  return (
    <>
      <motion.h2
        whileInView={{ opacity: [0, 1], y: [60, 0] }}
        whileHover={{ scale: 1.1 }}
        className="head-text app__flex"
      >
        <span>Special Design</span>
      </motion.h2>
      <div className="app__profiles">
        {abouts.map((about, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transitio={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + i}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
      <p className="head-text">
        <span> About </span>
      </p>
      <div className="Testi">
        <div className="left">
          <p className="p-text who">Who am I ?</p>
          <p>
            <span className="p-text who">Anas Youssef</span>
            <span className="p-text who"> - Electrical Engineer</span>
            <br />
            <span className="p-text who-2">
              I am an engineer in the Faculty of Engineering in Benha in the
              electrical department. I learned programming <br /> since my first
              year in college. <br /> and then I joined the Al-Bunyan Al-Marsous
              competition and learned a lot. I thank them for this amazing
              effort <br /> I hope one day I will benefit Islam and Muslims and
              become one of the most famous programmers in the world
            </span>
          </p>
        </div>
        <div className="right">
          <img src={AboutMe[0].image1} alt="about" />
        </div>
      </div>
    </>
  );
};

export default AppWrap(About, "about");
