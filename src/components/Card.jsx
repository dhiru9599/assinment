import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import Modal from "./Modal";

const Card = ({ data }) => {
  const [modal, setModal] = useState(false);



  const { title, body } = data;
  const name = title.substr(0, 10);
  const desc = body.substr(0, 20) + "...";
  return (
    <div className="w-[42vw] lg:w-[15vw] text-center flex flex-col justify-evenly shadow-2xl gap-y-3 rounded-xl border-[2px] bg-white">
      <div className="flex justify-center align-middle gap-3 mt-2">
        <h2 className="text-xl font-bold text-slate-600 capitalize">{name}</h2>
        <div className="flex align-middle">
          <AiFillEye className="text-purple-600 m-auto text-[2rem]" onClick={()=> setModal(true)}/>
        </div>
      </div>

      <img
        className="m-auto rounded-lg max-w-[90%]"
        src="http://via.placeholder.com/150"
        alt="image"
      />
      <h3 className="text-md w-[80%] m-auto text-sm text-slate-700 pb-2">{desc}</h3>

      {modal && <Modal data={data} closeModal={setModal}/>}
    </div>
  );
};

export default Card;
