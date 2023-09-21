import React from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Modal = ({ data, closeModal }) => {
  const title = data.title.substr(0, 10);
  return (
    <div className="fixed top-0 left-0 w-[100vw] h-[100vh] backdrop-blur-sm flex items-center justify-center backdrop-brightness-[40%]">
      <div className="bg-purple-500 rounded-lg shadow-2xl w-[85vw] lg:w-[45vw] lg:h-fit overflow-y-scroll">
        <AiOutlineCloseSquare
          className="text-[3rem] text-violet-200"
          onClick={() => closeModal(false)}
        />

        <div className="flex flex-col items-center">
          <p className="text-[2rem] text-white capitalize font-bold m-2 w-[60%]">{title}</p>
          <img className="m-2 border-2 border-purple-500 rounded-md" src="http://via.placeholder.com/150" alt="" />
          <p className="w-[60%] text-slate-200 text-justify m-auto pb-[5vh]">{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
