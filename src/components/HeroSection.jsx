const HeroSection = () => {
    return (
      // container
      <div className=" lg:w-4/5 box-border h-auto pt-36 flex justify-center items-center flex-col">
        <div className="lg:w-full text-center flex justify-center items-center px-48 flex-col gap-6">
          <h1 className="text-7xl text-textH text-center w-full h-auto font-bold">
            Shaping a world with <span>reimagination.</span>
          </h1>
          <p className=" text-gray-300 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
            nam itaque sed eius modi error totam sit illum. Voluptas doloribus
            asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
          </p>
        </div>
        <div className="lg:w-full flex justify-center items-center flex-row box-border gap-6 mt-16">
          <button className=" w-32 h-11 bg-btn rounded-3xl px-4 py-1 text-textH font-semibold hover:scale-105   transition-all duration-500">
            Get started
          </button>
          <button className="w-32 h-11 bg-HoverDiv rounded-3xl px-4 py-1 text-textH font-semibold   transition-all duration-500 border-[1px] border-gray-700  hover:scale-105   ">
            Learn more
          </button>
        </div>
        <div className=" lg:w-[70%] h-auto mt-16 border-t-[1px] border-t-gray-700  border-b-[1px] border-b-gray-700 flex justify-between items-center mb-16 py-8">
          <div className="w-auto h-auto box-border flex justify-center items-start flex-col gap-y-2">
            <h2 className="text-textH font-semibold  text-lg">The lowest price</h2>
            <p className="text-textP">Some text here</p>
          </div>
          <div className="w-auto h-auto box-border flex justify-center items-start flex-col gap-y-2">
            <h2 className="text-textH font-semibold  text-lg">The fastest on the market</h2>
            <p className="text-textP ">Some text here</p>
          </div>
          <div className="w-auto h-auto box-border flex justify-center items-start flex-col gap-y-2">
            <h2 className="text-textH font-semibold  text-lg">The most loved</h2>
            <p className="text-textP ">Some text here</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  