/* eslint-disable @next/next/no-img-element */
import React from "react";
import CustomerData from "@/app/interfaces/customerData";
import CustomerDetailsCard from "../Cards/CustomerDetailsCard";

type Props = {
  data: CustomerData;
};

const CustomerDetails = ({ data }: Props) => {
  return (
    <div className="w-[35vw] h-screen bg-[#ececf9]">
      <div className="flex flex-col justify-center items-center h-1/3 bg-white border-l">
        <img
          src="/profile.png"
          className="h-20 w-20 rounded-full shadow-sm border-4 border-gray-100"
          alt="Customer"
        />
        <p className="text-xl font-medium">
          {data.name.firstName} {data.name.lastName}
        </p>
        {data.online ? (
          <p className="text-green-500">•online</p>
        ) : (
          <p className="text-gray-500">•offline</p>
        )}
        <div className="flex justify-center items-center gap-4 mt-4">
          <button className="flex justify-center items-center rounded-md px-4 border-2 border-gray-300 gap-1 text-lg font-medium">
            <img src="/icons/call.svg" className="h-4 w-4" alt="call" />
            <span>call</span>
          </button>
          <button className="flex justify-center items-center rounded-md px-4 border-2 border-gray-300 gap-1 text-lg font-medium">
            <img src="/icons/profile.svg" className="h-5 w-5" alt="call" />
            <span>Profile</span>
          </button>
        </div>
      </div>
      <CustomerDetailsCard data={data} />
    </div>
  );
};

export default CustomerDetails;
