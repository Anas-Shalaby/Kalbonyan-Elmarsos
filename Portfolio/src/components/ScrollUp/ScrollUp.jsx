import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./ScrollUp.scss";
const ScrollUp = () => {
  const [reach, setReach] = useState(false);

  useEffect(() => {
    const scrollFun = () => {
      if (window.pageYOffset > 900) {
        setReach(true);
      } else {
        setReach(false);
      }
    };

    window.addEventListener("scroll", scrollFun);

    return () => {
      window.removeEventListener("scroll", scrollFun);
    };
  }, []);
  return (
    <div>
      {" "}
      {reach ? (
        <motion.div className="app__up-btn">
          <div onClick={(e) => (document.documentElement.scrollTop = 0)}>
            <AiOutlineArrowUp className="scoll-up-btn" />
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ScrollUp;
