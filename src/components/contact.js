import React from "react";

export default function Contact(){
    return (
        <section id="contact">
          <div className="container px-5 py-10 mx-auto mt-40 mb-20">
            <div>
                <div className="text-center">
                  <h1 class="mb-4 font-extrabold tracking-tight text-center leading-none text-4xl md:text-5xl lg:text-6xl">
                    <h1 className="subtitle text-center">* Contact Me</h1>
                  </h1>
                  <h3 className="subtitle-light font-sans text-lg mb-8 leading-relaxed">
                    I’m always looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                  </h3>
                    <a href="mailto:tusharkumar91111@gmail.com" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="outline outline-[#FF5F00] rounded-xl text-black px-3 py-2 mt-10">
                            <b className="roboto-font text-white accent">
                                Say Hi!
                            </b>
                        </button>
                    </a>
                </div>
            </div>
          </div>
        </section>
      );
    }