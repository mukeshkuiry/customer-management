"use client";
import { useEffect, useState } from "react";
import FirebaseAuth, {
  signOut,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "@firebase/auth";

import React, { useContext } from "react";
import { app } from "../lib/firebaseConfig";
import { log } from "console";
export interface IAuthContext {
  authUser: FirebaseAuth.User | null;
  signupWithEmail: (email: string, password: string) => any;
  signinWithEmail: (email: string, password: string) => any;
  logout: () => any;
}

const defaultValues: IAuthContext = {
  authUser: null,
  signupWithEmail: () => {},
  signinWithEmail: () => {},
  logout: () => {},
};

const AuthContext = React.createContext(defaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }: any) {
  // const [userInitialized, setUserInitialized] = useState<boolean>(false)
  const [authUser, setAuthUser] = useState<FirebaseAuth.User | null>(
    defaultValues.authUser
  );
  const auth = getAuth(app);
  const signupWithEmail = async (email: string, password: string) => {
    try {
      console.log("Creating account");
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;
      if (user) {
        setAuthUser(user);
        alert("Account created successfully");
        return user;
      }
    } catch (err) {
      console.log(
        "Failed to create account: check your email and password:",
        err
      );
      alert("Failed to create account: check your email and password");
    }
  };

  const signinWithEmail = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      if (user) {
        setAuthUser(user);
        return user;
      }
    } catch {
      alert("Failed to authenticate: check your email and password");
    }
  };

  const logout = async () => {
    await signOut(auth);
    setAuthUser(null);
  };

  // useEffect(() => {
  //   if (
  //     authUser === null &&
  //     window.location.pathname !== "/auth/login" &&
  //     window.location.pathname !== "/auth/signup"
  //   ) {
  //     window.location.href = "/auth/login";
  //   }
  // }, []);

  const value = {
    authUser,
    signupWithEmail,
    signinWithEmail,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
