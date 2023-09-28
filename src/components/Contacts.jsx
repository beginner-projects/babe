

const Contacts = () => {
  return (
    <div className="bg-bg m-auto py-20">
       <div className=" text-textH text-4xl m-auto text-center font-bold ">
        Get Started Now
      </div>
      <div className="text-center text-gray-400 py-4 text-lg mx-3">
      Be part of millions people around the world using tailus <br/>in modern User Interfaces.
      </div>
      <div className="lg:w-full flex justify-center items-center flex-row box-border gap-6 my-3">
          <button className=" w-32 h-11 bg-btn rounded-3xl px-4 py-1 text-textH font-semibold hover:scale-105   transition-all duration-500">
            Get started
          </button>
          <button className="w-32 h-11 bg-HoverDiv rounded-3xl px-4 py-1 text-textH font-semibold   transition-all duration-500 border-[1px] border-gray-700  hover:scale-105   ">
            Learn more
          </button>
        </div>
    </div>
  )
}

export default Contacts
