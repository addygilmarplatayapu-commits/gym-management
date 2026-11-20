import GymLogo from "../atoms/GymLogo";
import PlanCard from "../molecules/PlanCard";

export default function PlansList({ plans }) {
  const trialDays = plans?.[0]?.trialDays ?? 7;

  return (
    <div className="p-5 flex flex-col min-h-screen bg-black text-white">
      <div className="mt-4 mb-6 text-center">
        <GymLogo size="lg" />
        <h1 className="text-[#84CC16] text-2xl font-semibold mt-4">Select Your Plan</h1>
        <p className="text-[#84CC16] text-xs mt-1">{trialDays} Days Free Trial</p>
      </div>

      <div className="space-y-4">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}