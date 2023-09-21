import React from "react";
import {BiErrorAlt} from "react-icons/bi"

const Error = ({ message }) => {
  return (
    <div className="flex justify-center gap-1 lg:gap-2 text-center w-[90vw] lg:w-[40vw] mt-[10vh] mx-auto">
      <BiErrorAlt className="text-6xl lg:text-4xl  text-orange-600"/>
      <p className="text-2xl w-[80%]">{message}!! Try again after sometime.</p>
    </div>
  );
};

export default Error;
