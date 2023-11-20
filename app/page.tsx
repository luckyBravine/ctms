"use client";
import Image from "next/image";
import Login from "./Login/page";
import Register from "./Register/page";
import Student from "./Student/page";
import Moderator from "./Moderator/page";
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense("Ngo9BigBOggjHTQxAR8/V1NHaF5cWWdCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWH5feXRVRGFeWE1yV0M=");

export default function Home() {
  return (
    <main className="w-full flex flex-col mx-auto overflow-x-hidden justify-center">
      {/* <Login /> */}
      {/* <Register/> */}
      {/* <Student/> */}
      <Moderator />
    </main>
  );
}
