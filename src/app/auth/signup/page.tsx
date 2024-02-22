import SignUp from "@/app/components/Cards/SignUp";
import React from "react";

type Props = {};

const SignUpPage = (props: Props) => {
  return (
    <div className="bg-blue-400 h-screen w-screen flex justify-center items-center ">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
