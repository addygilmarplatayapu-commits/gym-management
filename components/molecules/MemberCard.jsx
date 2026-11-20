import { Phone, MessageCircle, RotateCw, MessageSquare, Ban, Trash2, IdCard } from "lucide-react";

export default function MemberCard({ member }) {
  return (
    <div className="border border-[#84CC16] rounded-xl p-2.5 bg-[#0D0D0D] relative flex flex-col justify-between">
      <button type="button" className="absolute top-2 right-2 text-white opacity-80">
        <Trash2 className="w-3.5 h-3.5" />
      </button>

      <div className="w-14 h-14 rounded-full overflow-hidden mx-auto border border-gray-600 mb-2">
        <img
          src={member.avatar || "https://i.pravatar.cc/150?img=12"}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-[11px] space-y-0.5 leading-tight">
        <p className="truncate">
          <span className="text-[#84CC16]">Name : </span>
          <span className="text-white font-medium">{member.name}</span>
        </p>
        <p className="flex items-center gap-1">
          <IdCard className="w-3 h-3 text-white inline" />
          <span className="text-[#84CC16]">M ID : </span>
          <span className="text-white">{member.memberNo || member.id}</span>
        </p>
        <p className="truncate">
          <span className="text-[#84CC16]">Plan Expiry : </span>
          <span className="text-white">{member.planExpiry || "01 Sep 2023"}</span>
        </p>
        <p>
          <span className="text-[#84CC16]">Due Amount : </span>
          <span className="text-white">{member.dueAmount || "0"}</span>
        </p>
      </div>

      <div className="grid grid-cols-5 gap-0.5 mt-3 pt-1.5 border-t border-gray-800 text-center">
        <div className="flex flex-col items-center">
          <Phone className="w-3 h-3 text-white" />
          <span className="text-[7px] text-[#84CC16] mt-0.5">Call</span>
        </div>
        <div className="flex flex-col items-center">
          <MessageCircle className="w-3 h-3 text-white" />
          <span className="text-[7px] text-[#84CC16] mt-0.5">Whatsapp</span>
        </div>
        <div className="flex flex-col items-center">
          <RotateCw className="w-3 h-3 text-white" />
          <span className="text-[7px] text-[#84CC16] mt-0.5">Renew</span>
        </div>
        <div className="flex flex-col items-center">
          <MessageSquare className="w-3 h-3 text-white" />
          <span className="text-[7px] text-[#84CC16] mt-0.5">Message</span>
        </div>
        <div className="flex flex-col items-center">
          <Ban className="w-3 h-3 text-white" />
          <span className="text-[7px] text-[#84CC16] mt-0.5">Block</span>
        </div>
      </div>
    </div>
  );
}