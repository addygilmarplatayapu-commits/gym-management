"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, Users } from "lucide-react";
import GreenLabel from "../atoms/GreenLabel";
import DottedInput from "../atoms/DottedInput";
import { createMember } from "../../services/api";

export default function AddMemberForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    gender: "Male",
    memberNo: "12",
    height: "",
    weight: "",
    chest: "",
    waist: "",
    dob: "",
    address: "",
    training: "Trainer",
    plan: "General [ 800 ]",
    batchTime: "6.00am to 7.00am",
    joiningFrom: "1/9/23",
    joiningTo: "1/10/23",
    paidAmount: "",
    dueAmount: "0",
    paymentMethod: "Cash",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;

    setLoading(true);
    try {
      const randomImg = Math.floor(Math.random() * 50) + 1;
      await createMember({
        name: form.name,
        mobile: form.mobile,
        gender: form.gender,
        memberNo: Number(form.memberNo),
        planExpiry: form.joiningTo || "01 Sep 2023",
        dueAmount: Number(form.dueAmount) || "0",
        plan: form.plan,
        batchTime: form.batchTime,
        avatar: 'https://i.pravatar.cc/150?img=${randomImg}',
      });

      router.push("/members");
      router.refresh();
    } catch (error) {
      alert("Error al guardar miembro en MockAPI");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-3.5 bg-black text-white text-sm">
      <div className="flex items-center gap-2">
        <GreenLabel text="Name -:" />
        <DottedInput name="name" value={form.name} onChange={handleChange} required />
      </div>

      <div className="flex items-center gap-4">
        <GreenLabel text="Upload Photo -:" />
        <div className="border border-gray-500 rounded-full px-5 py-1 flex items-center gap-2 text-xs text-[#84CC16]">
          <Upload className="w-3.5 h-3.5" />
          <span>Upload</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <GreenLabel text="Mobile No. -:" />
        <DottedInput name="mobile" value={form.mobile} onChange={handleChange} />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-white">
          <Users className="w-4 h-4" />
          <span className="text-[#84CC16] font-bold">-:</span>
        </div>
        <label className="flex items-center gap-1.5 text-[#84CC16] cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={form.gender === "Male"}
            onChange={handleChange}
            className="accent-[#84CC16]"
          />
          Male
        </label>
        <label className="flex items-center gap-1.5 text-[#84CC16] cursor-pointer">
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={form.gender === "Female"}
            onChange={handleChange}
            className="accent-[#84CC16]"
          />
          Female
        </label>
      </div>

      <div className="flex items-center gap-2">
        <GreenLabel text="Member No -:" />
        <DottedInput name="memberNo" value={form.memberNo} onChange={handleChange} />
      </div>

      <div className="flex items-start gap-2">
        <GreenLabel text="Measurement -:" />
        <div className="grid grid-cols-2 gap-2 text-[11px] text-[#84CC16] flex-1">
          <div className="flex items-center gap-1">
            <span>Height:</span>
            <DottedInput name="height" value={form.height} onChange={handleChange} />
          </div>
          <div className="flex items-center gap-1">
            <span>Weight:</span>
            <DottedInput name="weight" value={form.weight} onChange={handleChange} />
          </div>
          <div className="flex items-center gap-1">
            <span>Chest:</span>
            <DottedInput name="chest" value={form.chest} onChange={handleChange} />
          </div>
          <div className="flex items-center gap-1">
            <span>Waist:</span>
            <DottedInput name="waist" value={form.waist} onChange={handleChange} />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <GreenLabel text="Date of Birth -:" />
        <DottedInput name="dob" value={form.dob} onChange={handleChange} />
      </div>

      <div className="flex items-center gap-2">
        <GreenLabel text="Address -:" />
        <DottedInput name="address" value={form.address} onChange={handleChange} />
      </div>

      <div className="flex items-center gap-4">
        <GreenLabel text="Training -:" />
        <label className="flex items-center gap-1.5 text-[#84CC16]">
          <input
            type="radio"
            name="training"
            value="Trainer"
            checked={form.training === "Trainer"}
            onChange={handleChange}
            className="accent-[#84CC16]"
          />
          Trainer
        </label>
        <label className="flex items-center gap-1.5 text-[#84CC16]">
          <input
            type="radio"
            name="training"
            value="Personal"
            checked={form.training === "Personal"}
            onChange={handleChange}
            className="accent-[#84CC16]"
          />
          Personal
        </label>
      </div>

      <div className="flex items-center gap-2">
        <GreenLabel text="Plan -:" />
        <select
          name="plan"
          value={form.plan}
          onChange={handleChange}
          className="flex-1 bg-black border-b border-dotted border-gray-400 text-white text-sm py-0.5 focus:outline-none"
        >
          <option value="General [ 800 ]">General [ 800 ]</option>
          <option value="Standard [ 40$ ]">Standard [ 40$ ]</option>
          <option value="Premium [ 50$ ]">Premium [ 50$ ]</option>
          <option value="Golden [ 60$ ]">Golden [ 60$ ]</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <GreenLabel text="Batch Time -:" />
        <select
          name="batchTime"
          value={form.batchTime}
          onChange={handleChange}
          className="flex-1 bg-black border-b border-dotted border-gray-400 text-white text-sm py-0.5 focus:outline-none"
        >
          <option value="6.00am to 7.00am">6.00am to 7.00am</option>
          <option value="7.00am to 8.00am">7.00am to 8.00am</option>
          <option value="6.00pm to 7.00pm">6.00pm to 7.00pm</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <GreenLabel text="Joining Date -:" />
        <DottedInput name="joiningFrom" value={form.joiningFrom} onChange={handleChange} />
        <span className="text-[#84CC16] font-bold">To</span>
        <DottedInput name="joiningTo" value={form.joiningTo} onChange={handleChange} />
      </div>

      <div className="flex items-center gap-2">
        <GreenLabel text="Paid Amount -:" />
        <DottedInput name="paidAmount" value={form.paidAmount} onChange={handleChange} />
      </div>

      <div className="flex items-center gap-2">
        <GreenLabel text="Due Amount -:" />
        <DottedInput name="dueAmount" value={form.dueAmount} onChange={handleChange} />
      </div>

      <div className="flex items-center gap-2">
        <GreenLabel text="Payment Method -:" />
        <DottedInput name="paymentMethod" value={form.paymentMethod} onChange={handleChange} />
      </div>

      <div className="pt-4 text-center">
        <button
          type="submit"
          disabled={loading}
          className="border-2 border-[#84CC16] bg-black hover:bg-[#84CC16] hover:text-black text-[#84CC16] font-bold px-10 py-1.5 rounded-full transition cursor-pointer"
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
}