import { getPlans } from "../services/api";
import PlansList from "../components/organisms/PlansList";

export default async function SelectPlanPage() {
  const plans = await getPlans();
  return <PlansList plans={plans} />;
}