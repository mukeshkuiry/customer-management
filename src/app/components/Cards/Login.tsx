"use client";
import { AuthContextProvider, useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // Add rememberMe state

  const router = useRouter();
  const { signinWithEmail } = useAuth();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Perform login logic here using email and password state values
    // const user = await signinWithEmail(email, password);
    // user && 
    alert("Logged in successfully");
    router.push("/");
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <AuthContextProvider>
      <form className="flex flex-col space-y-4 p-4 px-8 bg-white rounded-md md:w-1/2 lg:w-1/4">
        <h2 className="font-semibold text-xl text-center my-2">
          Login to your account
        </h2>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            className="mr-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <label htmlFor="rememberMe" className="text-sm text-gray-700">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="text-sm text-gray-700 text-center">
          Don&apos;t have an account?{" "}
          <a href="/auth/signup" className="text-blue-400">
            Sign up
          </a>
        </p>
      </form>
    </AuthContextProvider>
  );
};

export default Login;
