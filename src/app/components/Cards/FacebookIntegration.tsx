import React from "react";

type Props = {};

const FacebookIntegration = (props: Props) => {
  return (
    <div className="w-1/4 p-8 rounded-md bg-white flex flex-col justify-center items-center space-y-4">
      <p className="text-xl font-semibold">Facebook page integration</p>
      <button className="px-4 py-2 w-full text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Connect page
      </button>
    </div>
  );
};

export default FacebookIntegration;
