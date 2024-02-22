/* eslint-disable @next/next/no-img-element */
import { useConversationContext } from "@/app/contexts/ConversationContext";
import { IConversionMessage } from "@/app/interfaces/conversionMessage";
import React, { useEffect, useState, useRef } from "react";
import Moment from "react-moment";

const ChatBox = () => {
  const {
    fetchConversionMessages,
    conversionMessages,
    chatHeader,
    sendMessage,
    isSending,
    conversionList,
  } = useConversationContext();

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fetchConversionMessages) {
      fetchConversionMessages("");
    }
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [conversionMessages]);

  return (
    <div className="w-full h-screen">
      {conversionMessages && conversionMessages.length > 0 ? (
        <div>
          <div className="p-4 border-y bg-white">
            <p className="text-2xl font-semibold">{chatHeader.name}</p>
          </div>
          <div className="bg-gray-200 h-[calc(100vh-4.5rem)]">
            {/* list goes here  */}
            <div
              ref={chatContainerRef}
              className="h-[calc(100%-5rem)] overflow-scroll overflow-x-hidden"
            >
              {conversionMessages &&
                conversionMessages.map(
                  (message: IConversionMessage, index: number) => (
                    <div
                      key={index}
                      className={` w-full flex items-center  gap-2
                ${
                  message.sender === "Coding World"
                    ? "flex-row-reverse"
                    : "flex-row"
                } p-2`}
                    >
                      <img
                        src="/"
                        className="h-8 w-8 rounded-full bg-gray-600 border"
                        alt=""
                      />
                      <div>
                        <div
                          className={`p-2 px-6 rounded-xl bg-white border-2 border-gray-300 shadow-sm`}
                        >
                          <p className="text-lg">{message.message}</p>
                        </div>
                        <p className="text-[12px] m-1">
                          {message.sender} -{" "}
                          <Moment format="MMM DD, H:MM A">
                            {message.time}
                          </Moment>
                        </p>
                      </div>
                    </div>
                  )
                )}
              {isSending && <div className="animate-pulse">Sending...</div>}{" "}
            </div>
            <div>
              <input
                type="text"
                placeholder="Type a message"
                className="my-4 mx-5 p-3 pl-8 shadow-md rounded-full w-[95%]"
                onKeyPress={async (event) => {
                  if (event.key === "Enter") {
                    sendMessage(event.currentTarget.value, chatHeader.id);
                    event.currentTarget.value = "";
                  }
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-semibold">
            Select a conversation to start chatting
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
