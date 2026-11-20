import { Dumbbell } from "lucide-react";

export default function GymLogo({ size = "md" }) {
  const dimensions = size === "lg" ? "w-16 h-16" : "w-10 h-10";
  return (
    <div className={`${dimensions} bg-black border-2 border-white rounded-xl flex flex-col items-center justify-center text-white shadow-md mx-auto`}>
      <Dumbbell className={size === "lg" ? "w-8 h-8 text-[#84CC16]" : "w-5 h-5 text-[#84CC16]"} />
      <span className="text-[7px] font-bold tracking-tighter uppercase mt-0.5">TRAINING</span>
    </div>
  );
}