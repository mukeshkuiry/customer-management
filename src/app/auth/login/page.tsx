import Login from "@/app/components/Cards/Login";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div className="bg-blue-400 h-screen w-screen flex justify-center items-center ">
      <Login />
    </div>
  );
};

export default LoginPage;
