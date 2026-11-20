"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, Users } from "lucide-react";
import GreenLabel from "../atoms/GreenLabel";
import DottedInput from "../atoms/DottedInput";
import { createMember } from "../../services/api";

export default function AddMemberForm({ plans = [] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const defaultPlan = plans[0]
    ? `${plans[0].name} [ ${plans[0].pricePerYear}$ ]`
    : "";

  const [form, setForm] = useState({
    name: "",
    avatar: "",
    mobile: "",
    gender: "Male",
    memberNo: "",
    height: "",
    weight: "",
    chest: "",
    waist: "",
    dob: "",
    address: "",
    trainingType: "Trainer",
    plan: defaultPlan,
    batchTime: "6.00am to 7.00am",
    joiningDate: "",
    expiryDate: "",
    paidAmount: "",
    dueAmount: "",
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
        memberNo: Number(form.memberNo),
        name: form.name,
        avatar: form.avatar.trim() || `https://i.pravatar.cc/150?img=${randomImg}`,
        mobile: form.mobile,
        gender: form.gender,
        height: Number(form.height) || 0,
        weight: Number(form.weight) || 0,
        chest: Number(form.chest) || 0,
        waist: Number(form.waist) || 0,
        dob: form.dob,
        address: form.address,
        trainingType: form.trainingType,
        plan: form.plan,
        batchTime: form.batchTime,
        joiningDate: form.joiningDate,
        expiryDate: form.expiryDate,
        paidAmount: Number(form.paidAmount) || 0,
        dueAmount: Number(form.dueAmount) || 0,
        paymentMethod: form.paymentMethod,
        blocked: false,
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

      <div className="flex items-center gap-2">
        <GreenLabel text="Photo URL -:" />
        <div className="flex items-center gap-2 flex-1">
          <Upload className="w-4 h-4 text-[#84CC16]" />
          <DottedInput
            name="avatar"
            value={form.avatar}
            onChange={handleChange}
            placeholder="https://... (opcional)"
          />
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
        <DottedInput name="memberNo" type="number" value={form.memberNo} onChange={handleChange} required />
      </div>

      <div className="flex items-start gap-2">
        <GreenLabel text="Measurement -:" />
        <div className="grid grid-cols-2 gap-2 text-[11px] text-[#84CC16] flex-1">
          <div className="flex items-center gap-1">
            <span>Height:</span>
            <DottedInput name="height" type="number" value={form.height} onChange={handleChange} />
          </div>
          <div className="flex items-center gap-1">
            <span>Weight:</span>
            <DottedInput name="weight" type="number" value={form.weight} onChange={handleChange} />
          </div>
          <div className="flex items-center gap-1">
            <span>Chest:</span>
            <DottedInput name="chest" type="number" value={form.chest} onChange={handleChange} />
          </div>
          <div className="flex items-center gap-1">
            <span>Waist:</span>
            <DottedInput name="waist" type="number" value={form.waist} onChange={handleChange} />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <GreenLabel text="Date of Birth -:" />
        <DottedInput name="dob" value={form.dob} onChange={handleChange} placeholder="ej. 15 May 1998" />
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
            name="trainingType"
            value="Trainer"
            checked={form.trainingType === "Trainer"}
            onChange={handleChange}
            className="accent-[#84CC16]"
          />
          Trainer
        </label>
        <label className="flex items-center gap-1.5 text-[#84CC16]">
          <input
            type="radio"
            name="trainingType"
            value="Personal"
            checked={form.trainingType === "Personal"}
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
          {plans.map((p) => (
            <option key={p.id} value={`${p.name} [ ${p.pricePerYear}$ ]`}>
              {p.name} [ {p.pricePerYear}$ ]
            </option>
          ))}
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
        <DottedInput name="joiningDate" value={form.joiningDate} onChange={handleChange} placeholder="1/9/23" />
        <span className="text-[#84CC16] font-bold">To</span>
        <DottedInput name="expiryDate" value={form.expiryDate} onChange={handleChange} placeholder="01 Oct 2023" required />
      </div>

      <div className="flex items-center gap-2">
        <GreenLabel text="Paid Amount -:" />
        <DottedInput name="paidAmount" type="number" value={form.paidAmount} onChange={handleChange} />
      </div>

      <div className="flex items-center gap-2">
        <GreenLabel text="Due Amount -:" />
        <DottedInput name="dueAmount" type="number" value={form.dueAmount} onChange={handleChange} required />
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