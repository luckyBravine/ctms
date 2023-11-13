"use client";
import Image from "next/image";
import Login from "./Login/page";
import Register from "./Register/page";
import Student from "./Student/page";
import Moderator from "./Moderator/page";

export default function Home() {
  return (
    <main className="bg-indigo-200 w-full flex flex-col mx-auto overflow-x-hidden justify-center">
      {/* <Login /> */}
      {/* <Register/> */}
      {/* <Student/> */}
      <Moderator />
    </main>
  );
}
