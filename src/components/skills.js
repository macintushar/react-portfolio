import React from "react";
import { skills, bio } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto mt-20">
        <div className="text-center">
          <h1 class="mb-4 font-extrabold tracking-tight text-center leading-none text-4xl md:text-5xl lg:text-6xl">
            <h1 className="subtitle">* Skills</h1>
          </h1>
            {bio.map((bio) => (
              <h3 className="subtitle-light font-sans text-lg mb-8 leading-relaxed">
                {bio}
              </h3>
            ))}
        </div>
      </div>
      <div className="container px-5 py-5 mx-auto">
        {skills.map((skill) => (
        <div className="grid grid-cols-4">
          <div></div>
          <div>
            <div class="mb-1 text-base font-medium text-white accent">
                  <b>
                    {skill.title}
                  </b>
              </div>
            <div class="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700" style={{width:"200%"}}>
                <div class="bg-orange-600 h-1 rounded-full dark:bg-blue-500" style={{width: skill.size+"%", backgroundColor:skill.color}}>
                </div>
            </div>
          </div>
          <div></div>
          <div></div> 
        </div>
        ))}
      </div>
    </section>
  );
}