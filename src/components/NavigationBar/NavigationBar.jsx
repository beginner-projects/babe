import { useState } from "react";
import { NavCompany, NavigationData } from "./NavigationData";
const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" Nagation w-[80%] h-20 m-auto py-6 flex justify-between align-middle">
      <div className="text-textH text-2xl font-extrabold flex place-items-center gap-3">
        <div className="flex gap-1">
          <div className="h-5 w-5 rounded-[100%] bg-white"></div>
          <div className="h-8 w-3 bg-btn"></div>
        </div>
        {NavCompany.title}
      </div>

      <button
        className="flex md:hidden gap-2 flex-col text-lg items-center justify-center text-textH "
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div
          className="w-8 h-[0.10rem] bg-gray-400 transition-all duration-300"
          style={
            isOpen
              ? {
                  transform: "rotate(-45deg)",
                  height: "0.15rem",
                }
              : {}
          }
        ></div>
        <div
          className="w-8 h-1 bg-gray-400 relative bottom-[0.71rem] transition-all duration-300"
          style={
            isOpen
              ? { transform: "rotate(45deg)", height: "0.15rem" }
              : { bottom: "0" }
          }
        ></div>
      </button>

      {isOpen && (
        <div className="absolute h-screen w-screen right-0 top-16 bg-bg transition-all delay-700 ">
          <div className="flex justify-start align-middle flex-col bg-[#293041] w-[90%] rounded-3xl m-auto my-7 gap-6 p-7 border-[1px] border-gray-700">
            {NavigationData.map((value, key) => {
              return (
                <div key={key} className="m-0 h-auto ">
                  <a
                    href={value.link}
                    className="text-[#b8b2b2] hover:text-textH text-lg w-36"
                  >
                    {value.item}
                  </a>
                </div>
              );
            })}
            <button className="px-4 py-1 w-36  text-textH text-base rounded-3xl  bg-btn hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      )}
      <div className="hidden md:flex align-middle justify-around gap-7">
        {NavigationData.map((value, key) => {
          return (
            <div key={key} className="m-auto h-auto">
              <a
                href={value.link}
                className="text-textP hover:text-textH text-lg"
              >
                {value.item}
              </a>
            </div>
          );
        })}
        <button className="px-4 py-0  text-textH text-base rounded-3xl  bg-btn hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
