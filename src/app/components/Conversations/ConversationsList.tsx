/* eslint-disable @next/next/no-img-element */
"use client";
import { useConversationContext } from "@/app/contexts/ConversationContext";
import React, { useState } from "react";
import { IoReload } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import Moment from "react-moment";

const ConversationsList = () => {
  const {
    conversionList,
    fetchConversionMessages,
    setChatHeader,
  } = useConversationContext();
  const [activeChat, setActiveChat] = useState<number>(-1);

  return (
    <div className="h-screen w-[40vw]">
      <div className="flex p-4 justify-between items-center bg-white border-2">
        <div className="flex justify-center items-center gap-2">
          <RiMenu2Line className="text-xl cursor-pointer" />
          <p className="text-2xl font-semibold">Conversations</p>
        </div>
        <IoReload className="text-xl cursor-pointer" />
      </div>
      <div className="border overflow-scroll overflow-x-hidden scroll-m-3 max-h-[calc(100vh-4.5rem)] h-[calc(100vh-4.5rem)]">
        {
          // Conversations
          conversionList &&
            conversionList.map((message, index) => (
              <div
                key={index}
                className={`p-4 border-b cursor-pointer ${
                  index === activeChat && "bg-gray-300"
                }`}
                onClick={() => {
                  if (message?.id) {
                    fetchConversionMessages(message?.id);
                    setActiveChat(index);
                    setChatHeader({
                      name: message.sender,
                      id: message.senderPSID,
                    });
                  }
                }}
              >
                <div className="flex gap-2 justify-between items-center">
                  <div className="flex items-center justify-center gap-4">
                    <input type="checkbox" className="h-5 w-5" />
                    <div>
                      <p className="font-semibold">{message.sender}</p>
                      <p className="text-sm">{message.type}</p>
                    </div>
                  </div>
                  <Moment fromNow className="text-sm">
                    {message.createdTime}
                  </Moment>
                </div>
                <p className="font-medium mt-2">{message.title}</p>
                <p>{message.message}</p>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default ConversationsList;
