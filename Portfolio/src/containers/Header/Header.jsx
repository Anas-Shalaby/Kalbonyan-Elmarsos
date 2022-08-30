import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../Wrapper";
const Header = () => {
  const scaleVarients = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello ,Iam</p>
              <h1 className="head-text">Anas Youssef</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
            <img src={images.robot} alt="robot" style={{ width: "100px" }} />
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img
          src={images.profile}
          alt="profile"
          style={{ width: "300px", borderRadius: "20px" }}
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          src={images.circle}
          alt="circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className="app__header-circles"
      >
        {[images.figma, images.redux, images.sass].map((circle, i) => (
          <div className="circle-cmp app__flex" key={`circle-${i}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
