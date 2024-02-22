import React from "react";

type Props = {
  name: string;
};

const FacebookIntegrationInfo = ({ name }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 p-8 py-4 bg-white w-1/4 rounded-md">
      <p className="text-xl font-semibold">Facebook page integration</p>
      <h1 className="text-xl">
        Integrated page: <span className="font-bold ">{name}</span>
      </h1>
      <button className="bg-red-500 text-white py-2 px-4 rounded w-full">
        Delete Integration
      </button>
      <button className="bg-blue-900 text-white py-2 px-4 mt-4 w-full rounded">
        Send
      </button>
    </div>
  );
};

export default FacebookIntegrationInfo;
