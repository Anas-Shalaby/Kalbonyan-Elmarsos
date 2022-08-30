import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://github.com/Anas-Shalaby?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/ansyoussef12"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/anas-youssef-29339b225/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
