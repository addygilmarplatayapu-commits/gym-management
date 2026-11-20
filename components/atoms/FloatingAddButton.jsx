"use client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FloatingAddButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/members/add")}
      aria-label="Add Member"
      className="fixed bottom-20 right-6 md:right-[calc(50%-180px)] w-14 h-14 bg-[#FF0000] hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg shadow-red-900/50 transition-transform active:scale-95 z-50 cursor-pointer"
    >
      <Plus className="w-8 h-8 stroke-[3]" />
    </button>
  );
}