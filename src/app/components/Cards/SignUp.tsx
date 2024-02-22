"use client";
import { AuthContextProvider, useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const SignUp = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const router = useRouter();
  const { signupWithEmail } = useAuth();
  const handleCreateAccount = async (e: React.FormEvent) => {
    // e.preventDefault();
    // Perform account creation logic here
    const result = await signupWithEmail(email, password);
    console.log("result", result);
    // result && router.push("/");
  };

  return (
    <AuthContextProvider>
      <form
        className="flex flex-col space-y-4 p-4 px-8 bg-white rounded-md md:w-1/2 lg:w-1/4"
        // onSubmit={handleCreateAccount}
      >
        <h2 className="text-xl font-semibold mt-2 text-center">
          Create Account
        </h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required // Add required attribute
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Add required attribute
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required // Add required attribute
          />
        </div>
        <div className="mb-4">
          <label htmlFor="remember" className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="mr-2"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <span className="text-gray-700">Remember me</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 w-full"
          onClick={handleCreateAccount}
        >
          Sign Up
        </button>
        <div className="mt-4">
          <p className="text-gray-700 text-center">
            Already have an account?{" "}
            <a href="/auth/login" className="text-blue-400">
              Sign in
            </a>
          </p>
        </div>
      </form>
    </AuthContextProvider>
  );
};

export default SignUp;
