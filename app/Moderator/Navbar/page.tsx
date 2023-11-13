import Link from "next/link";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsTable, BsKanbanFill } from "react-icons/bs";
import { PiNotePencilDuotone } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";


export default function Navbar() {
  return (
    <nav className="p-5 flex justify-between place-items-center items-center mx-auto w-[100vw] shadow-lg">
      <Link
        className="bg-[#e0f7fa] p-1 rounded-full flex justify-center items-center"
        href="../Components/Timetable/"
      >
        <BsTable className="relative w-6 h-6 ml-3 mr-1 text-slate-800" />
        <span className=" mr-1 text-base text-slate-500">Timetable</span>
      </Link>
      <Link
        className="bg-[#e0f7fa] p-1 rounded-full flex justify-center items-center"
        href="../Components/Graph"
      >
        <AiOutlinePrinter className="relative w-6 h-6 ml-3 mr-1 text-slate-800" />
        <span className=" mr-1 text-base text-slate-500">Generate Report</span>
      </Link>
      <Link
        className="bg-[#e0f7fa] p-1 rounded-full flex justify-center items-center"
        href="../Components/Notes"
      >
        <PiNotePencilDuotone className="relative w-6 h-6 ml-3 mr-1 text-slate-800" />
        <span className=" mr-1 text-base text-slate-500">Note</span>
      </Link>
      <Link
        className="bg-[#e0f7fa] p-1 rounded-full flex justify-center items-center"
        href="../Components/Calender"
      >
        <BsKanbanFill className="relative w-6 h-6 ml-3 mr-1 text-slate-800" />
        <span className=" mr-1 text-base text-slate-500">Kanban</span>
      </Link>
    </nav>
  );
}
