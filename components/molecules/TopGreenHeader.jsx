"use client";
import { Menu, Search, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import GymLogo from "../atoms/GymLogo";

export default function TopGreenHeader({ mode = "list" }) {
  const router = useRouter();

  return (
    <header className="bg-[#84CC16] p-3 text-black">
      <div className="flex items-center justify-between relative">
        {mode === "list" ? (
          <Menu className="w-6 h-6 text-white" />
        ) : (
          <button type="button" onClick={() => router.back()} className="p-1">
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
        )}

        <GymLogo size="sm" />
        <div className="w-6" />
      </div>

      {mode === "list" ? (
        <div className="flex items-center gap-2 mt-3">
          <div className="flex-1 bg-black rounded-full flex items-center px-3 py-1.5 text-gray-300">
            <Search className="w-4 h-4 mr-2 text-white" />
            <input
              type="text"
              readOnly
              placeholder="Name/ Mobile"
              className="bg-transparent text-xs focus:outline-none w-full text-white"
            />
          </div>
          <button type="button" className="bg-black text-white font-bold text-xs px-4 py-2 rounded-lg">
            SMS
          </button>
        </div>
      ) : (
        <h1 className="text-center font-bold text-lg mt-1 text-black">Add Member</h1>
      )}
    </header>
  );
}