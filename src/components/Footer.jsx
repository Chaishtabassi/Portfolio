import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillFacebook, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-slate-900 p-4" style={{ cursor: "default" }}>
      <div className="flex justify-between items-center flex-wrap gap-4">
        <p className="text-white text-center w-full sm:w-auto font-light">
          © {year} Chaishta Bassi. All rights reserved.
        </p>
        <div className="text-white flex gap-8">
          <a
            href="https://www.instagram.com/ch4ish74/"
            target="_blank"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <AiOutlineInstagram className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/chaishta-bassi-247b1420a/"
            target="_blank"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <AiFillLinkedin className="text-xl" />
          </a>
          <a
            href="https://github.com/Chaishtabassi"
            target="_blank"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
