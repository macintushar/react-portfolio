import React from "react";
import { pod } from "../data";

export default function Podcast(){
    return (
        <section id="podcast" className="mb-40">
            <div className="container px-5 py-10 mx-auto mt-20">
                <div className="text-center">
                <h1 class="mb-4 font-extrabold tracking-tight text-center leading-none text-4xl md:text-5xl lg:text-6xl">
                    <h1 className="subtitle">* Podcast</h1>
                </h1>
                <h3 className="subtitle-light font-sans text-lg mb-8 leading-relaxed">
                    Check out the latest episode of my podcast here
                </h3>
                </div>
            </div>
            <div className="container px-5 py-10 mx-auto">
                <div className="flex justify-center mx-auto">
                    <div className="text-center items-center justify-center">
                        {pod.map((pod) => 
                        <iframe src={pod} height="102px" width="400px" frameborder="0" title="Podcast" scrolling="no"></iframe>
                        )}
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <a href="https://anchor.fm/boredkid" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="bg-[#FF5F00] mt-8 rounded-xl text-black px-3 py-2 ">
                                <b className="roboto-font text-white">
                                    Check out the other episodes here
                                </b>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
      );
    }