import React from "react";

export default function About() {
  return (
    <section id="about" className="mb-40">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="mb-4 font-extrabold tracking-tight leading-none text-4xl md:text-5xl lg:text-6xl">
            <h1 className="subtitle">* About Me</h1>
          </h1>
          <h3 className="subtitle-light roboto-font font-sans text-lg mb-8 leading-relaxed">
          Hi, my name is Tushar. I am a 19 Year old. I taught myself Web Development and Python and I love to create projects using my skills. The few things I'm decent at are Coding, Cooking and Photography and I Live Stream events as a side gig. I also have a podcast that I host based on Tech.
          </h3>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center h-96 rounded-full"
            alt="hero"
            src="./tushar.jpeg"
          />
        </div>
      </div>
    </section>
  );
}