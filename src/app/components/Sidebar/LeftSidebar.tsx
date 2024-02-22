/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

type Props = {};

const LeftSidebar = (props: Props) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <div className="h-screen w-20 bg-blue-800 flex flex-col justify-between items-center ">
      <div>
        <div className="h-20 w-20 flex justify-center items-center cursor-pointer">
          <img src="/logo.png" className="h-16 w-16" alt="Logo" />
        </div>
        <div
          className={`h-20 w-20 flex justify-center items-center cursor-pointer transition-all ${
            activeTab == 1 ? "bg-white" : ""
          }`}
          onClick={() => setActiveTab(1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`w-6 h-6 ${
              activeTab == 1 ? "text-blue-800" : "text-white"
            }`}
          >
            <path
              strokeLinecap="round"
              stroke-linejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
        </div>
        <div
          className={`h-20 w-20 flex justify-center items-center cursor-pointer transition-all ${
            activeTab == 2 ? "bg-white" : ""
          }`}
          onClick={() => setActiveTab(2)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`w-6 h-6 ${
              activeTab == 2 ? "text-blue-800" : "text-white"
            }`}
          >
            <path
              strokeLinecap="round"
              stroke-linejoin="round"
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
            />
          </svg>
        </div>
        <div
          className={`h-20 w-20 flex justify-center items-center cursor-pointer transition-all ${
            activeTab == 3 ? "bg-white" : ""
          }`}
          onClick={() => setActiveTab(3)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`w-6 h-6 ${
              activeTab == 3 ? "text-blue-800" : "text-white"
            }`}
          >
            <path
              strokeLinecap="round"
              stroke-linejoin="round"
              d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
            />
          </svg>
        </div>
      </div>
      <div className="h-20 w-20 flex justify-center items-center">
        <img
          src="/profile.png"
          className="h-10 w-10 rounded-full"
          alt="Profile photo"
        />
      </div>
    </div>
  );
};

export default LeftSidebar;
