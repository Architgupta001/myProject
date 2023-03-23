"use client"; // this is a client component
import LandingPage from "../views/LandingPage/LandingPage";

import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

import useUser from "../hooks/useUser/useUser";

const Index = () => {
  const { user } = useUser();

  useEffect(() => {
    //check if user is signed in. If yes, redirect to /dashboard
  }, []);

  return user === null ? <LandingPage /> : <p>Signed in</p>;
};

export default Index;