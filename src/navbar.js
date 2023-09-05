import React from "react";
import {BiMenu} from 'react-icons/bi'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#0A0E13] mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <img src="./images/logo.png" className="w-11" alt="Tushar Selvakumar Logo"></img>
            </a>
            <button
              className="text-white accent cursor-pointer text-xl leading-none px-3 py-1 outline-[#CAD6F8] outline outline-2 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <BiMenu />
            </button>
          </div>
          <div
            className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#projects" >
                  <button className="px-3 py-2 nav-text accent">* Proojects</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#about" >
                  <button className="px-3 py-2 nav-text accent">* About Me</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#podcast" >
                  <button className="px-3 py-2 nav-text accent">* Podcast</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#skills" >
                  <button className="px-3 py-2 nav-text accent">* Skills</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#contact" >
                  <button className="px-3 py-2 nav-text accent">* Contact Me</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="./docs/Tushar Selvakumar - Resume.pdf" >
                  <button className="rounded-lg px-3 py-2 nav-text accent outline outline-2 outline-[#CAD6F8]">Résumé</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
