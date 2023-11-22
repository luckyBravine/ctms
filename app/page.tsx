"use client";
import Image from "next/image";
import Login from "./Login/page";
import Register from "./Register/page";
import Student from "./Student/page";
import Moderator from "./Moderator/page";
import { registerLicense } from '@syncfusion/ej2-base';
import { useState, useEffect } from 'react'
import Link from "next/link";


registerLicense("Ngo9BigBOggjHTQxAR8/V1NHaF5cWWdCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWH5feXRVRGFeWE1yV0M=");

export default function Home() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <main className="w-full flex flex-col mx-auto overflow-x-hidden justify-center">
      {/* <Login /> */}
      {/* <Register/> */}
      {/* <Student/> */}
      {/* <Moderator /> */}
      <Link href='/Moderator'>Moderator</Link>
    </main>
  );
}
