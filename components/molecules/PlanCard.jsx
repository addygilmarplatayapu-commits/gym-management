"use client";
import { useRouter } from "next/navigation";

export default function PlanCard({ plan }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/members")}
      className="border border-[#84CC16] rounded-xl p-4 bg-[#0D0D0D] hover:bg-[#161f0b] transition cursor-pointer"
    >
      <h3 className="text-[#84CC16] font-bold text-center text-lg uppercase">
        {plan.name}
      </h3>
      <p className="text-[#84CC16] text-center text-xs font-semibold mb-3">
        {plan.price} <span className="text-white font-normal">{plan.period}</span>
      </p>
      <ul className="space-y-1.5 text-xs text-gray-200">
        {plan.features?.map((feat, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-white text-[10px] mt-0.5">★</span>
            <span>{feat}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}