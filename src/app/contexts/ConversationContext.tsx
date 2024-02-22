"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IConversionListData } from "../interfaces/conversionlist";
import { IConversionMessage } from "../interfaces/conversionMessage";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

interface IDefaultValues {
  conversionList: IConversionListData[];
  conversionMessages: IConversionMessage[];
  fetchConversionMessages: (conversionId: string) => void;
  sendMessage: (message: string, senderPSID: string) => void;
  isSending: boolean;
  setConversionMessages: Dispatch<SetStateAction<IConversionMessage[]>>;
  chatHeader: {
    name: string;
    id: string;
  };
  setChatHeader: Dispatch<SetStateAction<{ name: string; id: string }>>;
}

const defaultValue: IDefaultValues = {
  conversionList: [],
  conversionMessages: [],
  fetchConversionMessages: () => {},
  sendMessage: () => {},
  isSending: false,
  setConversionMessages: () => {},
  chatHeader: {
    name: "",
    id: "",
  },
  setChatHeader: () => {},
};

const ConversationContext = createContext<IDefaultValues>(defaultValue);

export function useConversationContext() {
  return useContext(ConversationContext);
}

export function ConversationContextProvider({ children }: Props) {
  const [conversionList, setConversionList] = useState<IConversionListData[]>(
    []
  );
  const [conversionMessages, setConversionMessages] = useState<
    IConversionMessage[]
  >([]);

  const [isSending, setIsSending] = useState(false);

  const [chatHeader, setChatHeader] = useState({
    name: "",
    id: "",
  });

  const accessKey =
    "EAAEX7GdEi0MBO03wm61HFNbjsIpshns7oxsmpZC5ru4wPSlX2ApFz8PKQsCxhyJwlqwNlZAH173aqkTxjuDK9cjoZAc1siwufG9AL9GQ1nUNTwZABIsJuBS09N9xOAPZConNVkLjFimt2ZCXKWK23crZAZCfswy2vPdzxUR4jWgIGfv1FMoI4psVrunyDGV3GHR4";

  const addConversionToList = (conversionData: IConversionListData) => {
    setConversionList((prevList) => {
      // Check if the conversation already exists in the list
      const exists = prevList.some((item) => item.id === conversionData.id);
      if (!exists) {
        return [...prevList, conversionData];
      }
      return prevList;
    });
  };

  const fetchConversionList = async () => {
    try {
      const accessKey =
        "EAAEX7GdEi0MBO03wm61HFNbjsIpshns7oxsmpZC5ru4wPSlX2ApFz8PKQsCxhyJwlqwNlZAH173aqkTxjuDK9cjoZAc1siwufG9AL9GQ1nUNTwZABIsJuBS09N9xOAPZConNVkLjFimt2ZCXKWK23crZAZCfswy2vPdzxUR4jWgIGfv1FMoI4psVrunyDGV3GHR4";
      const response = await fetch(
        "https://graph.facebook.com/v19.0/100613455123646/conversations?fields=senders&access_token=" +
          accessKey
      );
      const data = await response.json();
      // data.data[0].id && fetchConversionMessages(data.data[0].id);
      // setChatHeader({
      //   name: data.data[data.data.length - 1].senders.data[0].name,
      //   id: data.data[data.data.length - 1].senders.data[0].id,
      // });

      data.data.map(async (conversation: any) => {
        const response = await fetch(
          `https://graph.facebook.com/v19.0/${conversation.id}/?fields=senders,snippet,updated_time,messages{message}&access_token=${accessKey}`
        );
        const data = await response.json();
        console.log(data);
        const conversionData: IConversionListData = {
          id: conversation.id,
          sender: data.senders.data[0].name,
          senderPSID: data.senders.data[0].id,
          type: "direct message",
          createdTime: data.updated_time,
          message: data.snippet,
          title: data.messages.data[data.messages.data.length - 1].message,
        };
        addConversionToList(conversionData);
      });
    } catch (error) {
      console.error("Error fetching conversation list: ", error);
    }
  };

  const fetchConversionMessages = async (conversationId: string) => {
    console.log("Fetching messages");
    console.log("Conversion list: ", conversionList);
    try {
      if (!conversationId)
        if (
          conversionList &&
          conversionList.length > 0 &&
          conversionList[0].id
        ) {
          conversationId = conversionList[0].id;
        } else {
          return;
        }
      const response = await fetch(
        `https://graph.facebook.com/v19.0/${conversationId}?fields=messages{message,from,created_time}&access_token=${accessKey}`
      );
      const data = await response.json();
      const messages: IConversionMessage[] = data.messages.data.map(
        (message: any) => ({
          id: message.id,
          sender: message.from.name,

          // profilePic: message.from.profile_pic,
          message: message.message,
          time: message.created_time,
        })
      );
      setConversionMessages(messages.reverse());
    } catch (error) {
      console.error("Error fetching conversation messages: ", error);
    }
  };

  const sendMessage = async (message: string, senderPSID: string) => {
    setIsSending(true);
    const response = await fetch(
      `https://graph.facebook.com/v19.0/100613455123646/messages?access_token=${accessKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipient: { id: senderPSID },
          messaging_type: "RESPONSE",
          message: { text: message },
        }),
      }
    );
    const data = await response.json();
    console.log("Message sent: ", data);
    setConversionMessages((prevMessages) => [
      ...prevMessages,
      {
        id: data.id,
        sender: "Coding World",
        message: message,
        time: new Date().toISOString(),
      },
    ]);
    setIsSending(false);

    // 100613455123646/messages?recipient={'id':'7430280123677708'}&messaging_type=RESPONSE&message={'text':'hello,world,mukesh'}
  };

  useEffect(() => {
    fetchConversionList();
  }, []);

  const value: IDefaultValues = {
    conversionList: conversionList,
    conversionMessages: conversionMessages,
    fetchConversionMessages: fetchConversionMessages, // Update the type to accept a conversationId parameter
    sendMessage: sendMessage,
    setConversionMessages: setConversionMessages,
    isSending: isSending,
    chatHeader: chatHeader,
    setChatHeader: setChatHeader,
  };
  return (
    <ConversationContext.Provider value={value}>
      {children}
    </ConversationContext.Provider>
  );
}
