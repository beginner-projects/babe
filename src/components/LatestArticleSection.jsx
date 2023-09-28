import a1 from "../assets/images/a1.jpg";
import a2 from "../assets/images/a2.jpg";
import a3 from "../assets/images/a3.jpg";

const LatestArticleSection = () => {
  return (
    <div className="bg-bg m-auto py-20">
      <div className=" text-textH text-4xl m-auto text-center font-bold ">
        Latest Article
      </div>
      <div className="text-center text-gray-400 py-4 ">
        Quam hic dolore cumque voluptate rerum beatae et quae,tempore <br />{" "}
        sunt, debitis dolorum officia aliquid explicabo? Excepturi, voluptate?
      </div>
      <div className="boxes flex flex-wrap-reverse my-7 justify-evenly  ">
        <div className=" w-72 bg-HoverDiv rounded-3xl border-gray-600 border-[1px] my-4">
          <div className="overflow-hidden w-56 m-auto rounded-xl h-64 my-7">
            <img
              src={a1}
              alt=""
              className=" w-auto h-auto object-cover hover:scale-110 transition-all duration-500 ease-in "
            />
          </div>
          <div className="pl-7 pr-6 text-textH text-2xl font-semibold">
            De fuga fugiat lorem ispum laboriosam expedita.
          </div>
          <div className="pl-7 pr-6 text-gray-400 py-7 text-md font-semibold">
            Voluptates harum aliquam totam, doloribus eum impedit atque!
            Temporibus...
          </div>
          <button className="pl-7 text-blue-400 mb-7">Read More</button>
        </div>
        <div className=" w-72 bg-HoverDiv rounded-3xl border-gray-600 border-[1px] my-4">
          <div className="overflow-hidden w-56 m-auto rounded-xl h-64 my-7">
            <img
              src={a3}
              alt=""
              className=" w-auto h-auto object-cover hover:scale-110 transition-all duration-500 ease-in "
            />
          </div>
          <div className="pl-7 pr-6 text-textH text-2xl font-semibold">
            De fuga fugiat lorem ispum laboriosam expedita.
          </div>
          <div className="pl-7 pr-6 text-gray-400 py-7 text-md font-semibold">
            Voluptates harum aliquam totam, doloribus eum impedit atque!
            Temporibus...
          </div>
          <button className="pl-7 text-blue-400 mb-7">Read More</button>
        </div>
        <div className=" w-72 bg-HoverDiv rounded-3xl border-gray-600 border-[1px] my-4">
          <div className="overflow-hidden w-56 m-auto rounded-xl h-64 my-7">
            <img
              src={a2}
              alt=""
              className=" w-auto h-auto object-cover hover:scale-110 transition-all duration-500 ease-in "
            />
          </div>
          <div className="pl-7 pr-6 text-textH text-2xl font-semibold">
            De fuga fugiat lorem ispum laboriosam expedita.
          </div>
          <div className="pl-7 pr-6 text-gray-400 py-7 text-md font-semibold">
            Voluptates harum aliquam totam, doloribus eum impedit atque!
            Temporibus...
          </div>
          <button className="pl-7 text-blue-400 mb-7">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default LatestArticleSection;
