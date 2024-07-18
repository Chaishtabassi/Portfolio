import React from "react";
import "../App.css";
import { services } from "../constants";
import ButtonLink from "./ButtonLink";
import Footer from "./Footer";

const ServiceCard = ({ service }) => (
  <div className="sm:w-[250px] w-full">
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px]">
      <div
        className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        style={{ background: "#151030" }}
      >
        <img
          src={service.icon}
          alt="some_icon"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <div
        className="bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden"
        id="about"
      >
        <div className="flex flex-col justify-around">
          <div className="sm:px-16 px-2">
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">
              Introduction
            </h2>
            <p className="mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]">
              👨‍💻 Hi, I'm Gaurav Semwal, a 2023 post graduate🎓 with a Master of
              Computer Applications (MCA) degree. I have a passion for crafting
              mobile applications. As a seasoned React Native developer, I
              specialize in creating engaging mobile apps using React Native and
              various modern web technologies including JavaScript, HTML, CSS,
              TypeScript, Firebase, Git, and GitHub. I'm proficient with all React
              hooks and Redux for state management.
              <br />
              ✍️ Beyond coding, I love sharing my insights and experiences
              through engaging blogs on{" "}
              <a
                className="text-purple-300 hover:text-purple-400 duration-300"
                href="https://www.linkedin.com/in/gaurav-semwal-788125247/"
                target="_blank"
              >
                Medium
              </a>
              , where I delve into the intricacies of software development and
              technology trends. I'm also into video editing, with knowledge of
              tools such as Adobe After Effects, Topaz Video Enhancing Tool,
              Adobe Premiere, and other editing software.
            </p>

            <ButtonLink
              url="https://drive.google.com/file/d/1RZOhbtgoF5x2saGPkR-ULnbpuoyG_QHm/view?usp=drivesdk  "
              text="View Resume →"
              padding={`p-3`}
            />
          </div>
          <div className="mt-20 flex justify-center flex-wrap gap-7">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
