import { useState } from "react";
import { NavCompany, NavigationData } from "./NavigationData";
const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" Nagation w-[80%] h-16 m-auto py-4 flex justify-between align-middle">
      <div className="text-textH text-2xl font-extrabold flex place-items-center gap-3">
        <div className="flex gap-1">
          <div className="h-5 w-5 rounded-[100%] bg-white"></div>
          <div className="h-8 w-3 bg-btn"></div>
        </div>
        {NavCompany.title}
      </div>
      {!isOpen ? (
        <button
          className="flex md:hidden gap-2 flex-col text-lg align-middle justify-center text-textH "
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <div className="w-10 h-1 bg-gray-400"></div>
          <div className="w-10 h-1 bg-gray-400"></div>
        </button>
      ) : (
        <div
          className="font-semibold relative -top-3 text-gray-400 text-5xl "
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          x
        </div>
      )}
      {isOpen && (
        <div className="absolute h-screen w-screen right-0 top-16 bg-bg">
          <div className="flex justify-start flex-col  gap-4">
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
      )}
      <div className="hidden md:flex align-middle justify-around gap-4">
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
