import React, { useState } from "react";
import {
  FaDownload,
  FaPaperPlane,
  FaFacebookMessenger,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { FaUserTag, FaUserSlash } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import SkillProgress from "./SkillProgress";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const ProfileInfo = () => {
  const navigate = useNavigate();

  const handleHireMeClick = () => {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo("contactme", {
        duration: 500,
        smooth: true,
        offset: -70,
      });
    }, 100);
  };
  const [showContact, SetShowContact] = useState("hidden");
  return (
    <>
      <div
        className="w-full md:w-[40%] flex flex-col items-center text-center bg-lightSecondary dark:bg-darkPrimary/50 rounded-md shadow-lg relative"
        data-aos="fade-right"
      >
        <img
          src="/assets/website.png"
          alt="Profile"
          className="w-full rounded-t-md h-auto object-cover mb-4"
        />

        <button
          onClick={() => SetShowContact(!showContact)}
          className="px-4 py-2 bg-lightSecondary text-darkSecondary rounded-bl-md rounded-tr-md
 block md:hidden absolute right-0 hover:shadow-[0px_10px_20px_rgba(129,33,208,0.7)] flex items-center gap-2"
        >
          {showContact ? <FaUserTag /> : <FaUserSlash />}
          {showContact ? "Show Profile" : "Hide Profile"}
        </button>

        <div className={`w-full ${showContact ? "hidden" : "block"} md:block`}>
          {" "}
          <h2 className="text-3xl font-bold text-darkAccent dark:text-lightAccent mt-8">
            Andrian Pontejo
          </h2>
          <div className="text-sm text-darkPrimary dark:text-lightPrimary mb-4">
            {" "}
            <ReactTyped
              strings={[
                "Full-Stack Web Developer",
                "WordPress Expert",
                "Backend Developer",
                "Frontend Enthusiast",
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mb-6 justify-center">
            <a
              href="https://web.facebook.com/dreyliba/"
              className="p-2 bg-purple-500 rounded-full text-white"
            >
              <FaFacebookMessenger />
            </a>
            <a
              href="https://github.com/dreyliba/"
              className="p-2 bg-purple-500 rounded-full text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/andrian-pontejo-5565181b7/"
              className="p-2 bg-purple-500 rounded-full text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/drey_liba/"
              className="p-2 bg-purple-500 rounded-full text-white"
            >
              <FaInstagram />
            </a>
          </div>
          <SkillProgress />
        </div>

        {/* Buttons */}
        <div className="flex flex-row absolute w-full bottom-0 rounded-b-md overflow-hidden">
          <div className="w-full group">
            {" "}
            <button
              onClick={() =>
                window.open(
                  "/assets/Andrian_Pontejo-Portfolio_Website-Resume.pdf",
                  "_blank"
                )
              }
              className="w-full flex items-center justify-center gap-2 px-4 py-4 text-darkPrimary hover:text-darkAccent transition bg-lightPrimary "
            >
              <FaDownload className="group-hover:animate-bounce" /> Download CV
            </button>
          </div>

          <div className="w-full group">
            <button
              onClick={handleHireMeClick}
              className="w-full flex items-center justify-center gap-2 px-4 py-4 text-lightAccent hover:text-lightPrimary transition  bg-darkAccent"
            >
              <FaPaperPlane className="group-hover:animate-bounce" /> Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
