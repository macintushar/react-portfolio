import React from "react";

export default function Intro() {  
  return (
    <section id="intro">
      <div className="container mx-auto mt-60 flex mb-80 ml-20 mr-20 px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <code className="accent">
              Hi, my name is
          </code>
          <br></br>
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
            <h1 class="main-title typewriter">Tushar Selvakumar.</h1>
            <h1 className="subtitle">I make things on the web.</h1>
          </h1>
          <h4 className="subtitle-light text-lg mb-8 leading-relaxed">
            I'm a CS Student at Christ University and I'm specializing in designing and developing projects for the web.
          </h4>
        </div>
      </div>
    </section>
    );
}