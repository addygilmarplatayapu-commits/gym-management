import { Users, BarChart2, Banknote, Building2, FileText } from "lucide-react";
import MemberCard from "../molecules/MemberCard";
import FloatingAddButton from "../atoms/FloatingAddButton";

export default function MembersGrid({ members }) {
  return (
    <div className="flex flex-col min-h-[calc(100vh-110px)] bg-black text-white pb-24">
      <div className="grid grid-cols-3 gap-2 p-3">
        <div className="border border-[#84CC16] rounded-full px-2 py-1 text-[11px] text-[#84CC16] text-center">
          All Member ▾
        </div>
        <div className="border border-[#84CC16] rounded-full px-2 py-1 text-[11px] text-[#84CC16] text-center">
          All Plans ▾
        </div>
        <div className="border border-[#84CC16] rounded-full px-2 py-1 text-[11px] text-[#84CC16] text-center">
          Select Batch ▾
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 px-3">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>

      <FloatingAddButton />

      <nav className="fixed bottom-0 w-full max-w-[420px] bg-[#262626] rounded-t-2xl py-2 px-3 grid grid-cols-5 text-center border-t border-gray-800">
        <div className="flex flex-col items-center text-[#84CC16]">
          <Users className="w-5 h-5" />
          <span className="text-[9px] mt-0.5">Members</span>
        </div>
        <div className="flex flex-col items-center text-white">
          <BarChart2 className="w-5 h-5" />
          <span className="text-[9px] mt-0.5">Dashboard</span>
        </div>
        <div className="flex flex-col items-center text-white">
          <Banknote className="w-5 h-5" />
          <span className="text-[9px] mt-0.5">Collection</span>
        </div>
        <div className="flex flex-col items-center text-white">
          <Building2 className="w-5 h-5" />
          <span className="text-[9px] mt-0.5">Gym</span>
        </div>
        <div className="flex flex-col items-center text-white">
          <FileText className="w-5 h-5" />
          <span className="text-[9px] mt-0.5">Today Report</span>
        </div>
      </nav>
    </div>
  );
}