import React from "react";
import Footer from "./Footer";

const ProjectCard = ({ image, title, description, technologies }) => {
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
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "KliniXcare Patient",
      description:
        "Developed a mobile application focused on patient management, enabling users to track medical records, appointments, and prescriptions. Enhanced user experience with intuitive UI/UX and integrated data visualization for better health monitoring.",
      technologies: ["React Native", "JavaScript"],
    },
    {
      title: "KliniXcare Doctor",
      description:
        "Created a mobile application tailored for healthcare professionals to manage patient appointments, medical histories, and treatment plans. Improved efficiency with a comprehensive dashboard for data visualization and financial management.",
      technologies: ["React Native", "JavaScript"],
    },
    {
      title: "Food Delivery",
      description:
        "Engineered a mobile app for food delivery services, offering seamless order tracking and real-time updates. Enhanced user experience with intuitive UI, secure payment integration, and efficient delivery management.",
      technologies: ["React Native", "JavaScript"],
    },
    {
      title: "Vehicale Safety",
      description:
        " Designed a mobile application focusing on vehicle safety and maintenance tracking. Provided users with features such as real-time alerts, vehicle diagnostics, and integrated data visualization for better vehicle management.",
      technologies: ["React Native", "JavaScript"],
    },
    {
      title: "Social Media",
      description:
        "Developed a mobile application for social networking, enabling users to connect, share updates, and interact with friends. Enhanced user engagement with features like real-time notifications, multimedia sharing, and personalized feeds.",
      technologies: ["React Native", "JavaScript"],
    },
    {
      title: "Leads Expertz",
      description:
        "Built the Leads Expertz App from scratch, handling the complete development lifecycle and ensuring timely delivery to meet company requirements. Designed and developed numerous screens, ensuring their proper functionality and seamless user experience. Implemented all necessary APIs to support app functionality, ensuring smooth and efficient data handling.",
      technologies: ["React Native", "JavaScript"],
    },
    {
      title: "Evaluation App",
      description:
        "Developed a robust evaluation application from inception to delivery, focusing on seamless user experience and comprehensive functionality. Designed and implemented a variety of interactive screens, ensuring intuitive navigation and engaging user interactions. Integrated advanced APIs to support extensive data management and real-time analytics, enhancing operational efficiency and decision-making.",
      technologies: ["React Native", "JavaScript"],
    }  
  ];

  const playStoreLinks = [
    { title: "KliniXcare Patient", link: "https://play.google.com/store/apps/details?id=com.klinixkarepatient" },
    { title: "KliniXcare Doctor", link: "https://play.google.com/store/apps/details?id=com.klinixcare" },
  ];

  return (
    <div className="bg-black">
      <div className="flex flex-wrap gap-7 justify-center items-stretch m-12 p-12 overflow-x-auto">
        {projects.map((item, index) => (
          <div key={index} className="flex-shrink-0 max-w-sm">
            <ProjectCard
              image={item.image}
              title={item.title}
              description={item.description}
              technologies={item.technologies}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center mt-8">
        <h2 className="text-white text-xl font-bold mb-4">Here are some Play Store links:</h2>
        <div className="flex justify-center space-x-4">
          {playStoreLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
