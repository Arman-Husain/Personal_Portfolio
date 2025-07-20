import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/landing-page.png"
          title="Responsive Landing Page"
          description="Fully responsive landing page with modern UI, smooth scroll animations, and contact form."
          link="https://arman-husain.github.io/SCT_WD_1/"
        />
        <ProjectCard
          src="/todo.png"
          title="Todo App"
          description="A clean, responsive to-do app with animations, task filtering, and mobile-friendly design."
          link="https://arman-husain.github.io/SCT_WD_2/"
        />
        <ProjectCard
          src="/calc.png"
          title="Calculator App"
          description="A sleek calculator app with dark mode, keyboard interaction, and accessibility features."
          link="https://arman-husain.github.io/SCT_WD_2/"
        />
      </div>
    </div>
  );
};

export default Projects;
