"use client";
import ChatBox from "./components/Conversations/ChatBox";
import ConversationsList from "./components/Conversations/ConversationsList";
import CustomerDetails from "./components/Sidebar/CustomerDetails";
import LeftSidebar from "./components/Sidebar/LeftSidebar";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ConversationContextProvider } from "./contexts/ConversationContext";
import CustomerData from "./interfaces/customerData";

export default function Home() {
  const data: CustomerData = {
    name: {
      firstName: "Mukesh",
      lastName: "Kuiry",
    },
    email: "mukesh@gmail.com",
    online: true,
  };
  return (
    <AuthContextProvider>
      <ConversationContextProvider>
        <div className="h-screen w-screen justify-between  items-center flex bg-gray-100">
          <LeftSidebar />
          <ConversationsList />
          <ChatBox />
          <CustomerDetails data={data} />
        </div>
      </ConversationContextProvider>
    </AuthContextProvider>
  );
}
