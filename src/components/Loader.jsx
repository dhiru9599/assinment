import React from "react";
import { MutatingDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="text-center m-auto">
      <MutatingDots
        height="100"
        width="100"
        color="#9D76C1"
        secondaryColor="#713ABE"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
