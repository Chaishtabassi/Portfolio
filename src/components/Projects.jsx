import React from "react";
import evaluationApp from "../assets/evaluationApp.jpeg";
import leadsExpertz from "../assets/dashboard.jpeg";
import Footer from "./Footer";

const ProjectCard = ({ image, title, description, git, technologies }) => {
  return (
    <div className="max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full flex flex-col">
      <a href="#">
        <img
          className="w-full rounded-t-lg h-63 object-cover"
          src={image}
          alt=""
        />
      </a>
      <div className="p-4 sm:p-6 flex-grow">
        <a href="#">
          <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
            {title}
          </h5>
        </a>
        <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="m-2 sm:m-4 lg:m-6 flex justify-between">
        <div className="flex flex-wrap gap-3 pl-2">
          {technologies.map((tag, index) => (
            <p key={`${index}-${tag}`} className="text-[14px] text-blue-500">
              #{tag}
            </p>
          ))}
        </div>
        <a
          href={git}
          className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-wrap gap-7 justify-center items-stretch m-12 p-12">
        {project.map((item, index) => (
          <div className="flex-1 max-w-sm">
            <ProjectCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              git={item.git}
              technologies={item.technologies}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export const project = [
  {
    title: "Evaluation App",
    description:
      "Developed a mobile application for tracking sales and expenses, providing users with data visualization on the dashboard for better financial management. Enhanced user experience with new features and functionalities.",
    image: evaluationApp,
    git: "https://github.com/gaurav-semwal/Evaluation",
    technologies: ["React Native", "JavaScript", "Kotlin", "Objective-C"],
  },
  {
    title: "Leads Expertz",
    description:
      "Built the Leads Expertz App from scratch, handling the complete development lifecycle and ensuring timely delivery to meet company requirements. Designed and developed numerous screens, ensuring their proper functionality and seamless user experience. Implemented all necessary APIs to support app functionality, ensuring smooth and efficient data handling.",
    image: leadsExpertz,
    git: "https://github.com/gaurav-semwal/Leads-Expertz",
    technologies: ["React Native", "Kotlin", "CSS", "JavaScript", "Objective-C"],
  },
];

export default Projects;
