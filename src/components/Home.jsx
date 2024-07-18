import React, { useState, useEffect, useRef } from "react";
import { name } from "../constants";
import Footer from "./Footer";

const Home = () => {
  const ref = useRef(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText((prevText) => prevText + name[ref.current - 1]);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="area relative z-0 bg-black w-screen h-screen">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div
        className="hero relative h-[calc(100vh)] flex flex-col justify-center items-center text-white text-center"
        id="hero"
      >
        <div className="pt-4 backdrop-blur-sm rounded-3xl">
          <h1 className="text-6xl sm:text-7xl font-extrabold mt-2">
            Hi, I'm&nbsp;
            <span className="text-yellow-200 font-extrabold">{text}</span>
          </h1>
          <p className="mt-3 text-xl max-w-2xl mx-auto">
            I love to learn and build mobile applications. As a seasoned React
            Native developer, I specialize in creating engaging mobile apps
            using <span className="text-blue-400 font-semibold">React Native</span> and modern web technologies like <span className="text-green-400 font-semibold">JavaScript</span>,
            <span className="text-purple-400 font-semibold"> HTML</span>,
            <span className="text-red-400 font-semibold"> CSS</span>,
            <span className="text-pink-400 font-semibold"> TypeScript</span>,
            <span className="text-yellow-400 font-semibold"> Firebase</span>,
            <span className="text-indigo-400 font-semibold"> Git</span>, and
            <span className="text-teal-400 font-semibold"> GitHub</span>. I'm proficient
            with all React hooks and <span className="text-orange-400 font-semibold">Redux</span> for state management. Additionally, I
            have skills in video editing with tools like <span className="text-cyan-400 font-semibold">Adobe After Effects</span>,
            <span className="text-lime-400 font-semibold"> Topaz Video Enhancing Tool</span>, and
            <span className="text-amber-400 font-semibold"> Adobe Premiere</span>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
