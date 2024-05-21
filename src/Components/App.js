import "./style.css";
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import socialPng from "../assets/social.png";
const tabs = [
  { id: 1, title: "Work", to: "/" },
  { id: 2, title: "About", to: "/about" },
  { id: 3, title: "Skills", to: "/play" },
  { id: 4, title: "Notes", to: "/note" },
];
const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div className="w-screen h-screen grid place-items-center fixed top-0">
        <div className="navbarShadow bg-gray-900 overflow-hidden flex items-center justify-start my-3 rounded-full h-14 min-w-[320px] max-w-[90vw]">
          <div className="hidden md:flex ml-[4px] p-[1px] text-white  items-center justify-center bg-zinc-100 rounded-full h-[50px] w-[50px]">
            <a
              rel="noreferrer"
              href="https://www.instagram.com/m_k_bagal/"
              target="_blank"
            >
              <img
                data-tooltip-id="instagram"
                className="h-full w-full"
                src={socialPng}
                alt="instagram"
              />
            </a>
          </div>
          <div className="innerDiv flex">
            {tabs.map((tab) => {
              return (
                <p
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`z-0 cursor-pointer tabItem relative font-semibold text-base text-zinc-500 flex items-center justify-center px-4 me-[3px] rounded-full h-[50px] ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                >
                  {tab.title}
                </p>
              );
            })}
          </div>
          <div className="hidden md:flex items-center justify-center px-5 me-[3px] bg-zinc-200 rounded-full h-[50px]">
            <p data-tooltip-id="resume" className="font-semibold text-base">
              Download
            </p>
          </div>
        </div>
      </div>
      <Tooltip id="instagram" place="bottom" content="Instagram" />
      <Tooltip id="resume" place="bottom" content="Download Resume" />
    </>
  );
};

export default App;
