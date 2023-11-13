import Navbar from "./Navbar/page";
import { MdOutlineClass } from "react-icons/md";
import { TbDeviceWatchStats } from "react-icons/tb";
// import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';

export default function Moderator() {
  return (
    <main className="flex flex-col justify-center w-[100vw] mx-auto">
      <Navbar />
      <section className="grid my-6 justify-center w-[100vw] mx-auto grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-3 bg-slate-200 flex-col justify-center shadow-lg">
          <h1 className="font-bold text-lg my-2">Add New Timetable</h1>
          <form action="">
            <input type="file" />
          </form>
        </div>
        <div className="p-3 bg-slate-200 flex-col justify-center shadow-lg">
          <div className="flex p-2 mx-auto justify-between">
            <TbDeviceWatchStats />
            <span className="font-bold text-base text-gray-600">Current Session</span>
          </div>
          <h1 className="font-bold text-lg my-2">Amm 102</h1>
          <div>
            <span className="font-bold text-base text-gray-600">1000hrs - 1300hrs</span>
            <span className="font-bold text-base text-gray-600 ">Tution Block</span>
          </div>
        </div>
        <div className="p-3 bg-slate-200 flex-col justify-center shadow-lg">
          <div className="flex p-2 mx-auto justify-between">
            <MdOutlineClass />
            <span className="font-bold text-base text-gray-600 ">
              Today's Classes
            </span>
          </div>
          <h1 className="font-bold text-lg my-2">3 Classes</h1>
        </div>
      </section>
      <section>
        <div></div>
        <div></div>
      </section>
    </main>
  );
}
