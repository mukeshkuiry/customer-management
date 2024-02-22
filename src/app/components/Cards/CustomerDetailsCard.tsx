import CustomerData from "@/app/interfaces/customerData";
import React from "react";

type Props = {
  data: CustomerData;
};

const CustomerDetailsCard = ({ data }: Props) => {
  return (
    <div className="p-6 rounded-md bg-white m-2 space-y-1">
      <p className="text-xl font-semibold mb-3">Customer Details</p>
      <p className="flex justify-between items-center">
        <span>Email:</span>
        <span className="font-semibold">{data.email}</span>
      </p>
      <p className="flex justify-between items-center">
        <span>First Name:</span>
        <span className="font-semibold">{data.name.firstName}</span>
      </p>
      <p className="flex justify-between items-center">
        <span>last Name:</span>
        <span className="font-semibold">{data.name.lastName}</span>
      </p>
      <p className="text-blue-500 cursor-pointer">view more details</p>
    </div>
  );
};

export default CustomerDetailsCard;
