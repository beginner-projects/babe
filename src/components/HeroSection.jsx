import { Clients } from "../Data/Data";
const HeroSection = () => {
  
  return (
    // container
    <div className=" lg:w-4/5 md:w-full box-border h-auto pt-36 flex justify-center items-center flex-col " id="hero">
      <div className="lg:w-full md:w-full  flex justify-center items-center lg:px-48 md:px-16 flex-col gap-6 px-16 text-center">
        <h1 className="lg:text-7xl md:text-6xl text-5xl text-textH text-center w-full h-auto font-bold">
          Shaping a world with <span>reimagination.</span>
        </h1>
        <p className=" text-gray-300 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
          nam itaque sed eius modi error totam sit illum. Voluptas doloribus
          asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
        </p>
      </div>
      <div className="md:w-full w-4/5 flex justify-center items-center md:flex-row box-border gap-6 mt-16 flex-col md:p-0 p-8 ">
        <button className=" md:w-32 h-11 w-full bg-btn rounded-3xl px-4 py-1 text-textH font-semibold hover:scale-105   transition-all duration-500">
          Get started
        </button>
        <button className="md:w-32 h-11 w-full bg-HoverDiv rounded-3xl px-4 py-1 text-textH font-semibold   transition-all duration-500 border-[1px] border-gray-700  hover:scale-105   ">
          Learn more
        </button>
      </div>
      <div className=" lg:w-[70%] md:w-4/5   hidden  h-auto mt-16 border-t-[1px] border-t-gray-700  border-b-[1px] border-b-gray-700 md:flex justify-between items-center  py-8">
        <div className="w-auto h-auto box-border flex justify-center items-start flex-col gap-y-2">
          <h2 className="text-textH font-semibold  text-lg">
            The lowest price
          </h2>
          <p className="text-textP">Some text here</p>
        </div>
        <div className="w-auto h-auto box-border flex justify-center items-start flex-col gap-y-2">
          <h2 className="text-textH font-semibold  text-lg">
            The fastest on the market
          </h2>
          <p className="text-textP ">Some text here</p>
        </div>
        <div className="w-auto h-auto box-border flex justify-center items-start flex-col gap-y-2">
          <h2 className="text-textH font-semibold  text-lg">The most loved</h2>
          <p className="text-textP ">Some text here</p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:w-full  w-4/5">
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex justify-center items-center">
          <img src={Clients.img5} alt="" className="w-auto h-12 mx-auto" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex justify-center items-center">
          <img src={Clients.img1} alt="" className="w-auto h-12 mx-auto" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex justify-center items-center">
          <img src={Clients.img4} alt="" className="w-auto h-9 mx-auto" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex justify-center items-center">
          <img src={Clients.img2} alt="" className="w-auto h-12 mx-auto" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex justify-center items-center">
          <img src={Clients.img6} alt="" className="w-auto h-8 mx-auto" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex justify-center items-center">
          <img src={Clients.img3} alt="" className="w-auto h-12 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
