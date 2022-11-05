import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
<section id="projects" className="mb-40">
    <div className="container px-5 py-10 mx-auto text-center">
      <div className="text-center">
        <h1 class="mb-4 font-extrabold tracking-tight text-center leading-none text-4xl md:text-5xl lg:text-6xl">
          <h1 className="subtitle text-center">* Projects</h1>
        </h1>
        <h3 className="subtitle-light font-sans text-lg mb-8 leading-relaxed">
          Here are a few projects I've done recently to increase my knowledge.
        </h3>
      </div>
    </div>
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-800 opacity-0 hover:opacity-100">
                    <h2 className="accent tracking-widest text-sm title-font font-medium text-white mb-1">
                        {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                    <br></br>
                    <a href={project.github}>
                      <button type="button" className="bg-black rounded-full mr-2">
                        <img className="h-10" src="./images/github.png" alt="Twitter Logo"></img>
                      </button>
                    </a> 
                    {project.link.length > 0 &&
                      <a href={project.link}>
                        <button type="button" data-tooltip-target="tooltip-dark" className="bg-white rounded-full">
                            <img className="h-10" src="./images/link.png" alt="Twitter Logo"></img>
                        </button>
                      </a> 
                    }   
                </div>
                <div id="tooltip-dark" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  Tooltip data
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}