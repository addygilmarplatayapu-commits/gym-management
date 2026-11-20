import { getPlans } from "../../../services/api";
import TopGreenHeader from "../../../components/molecules/TopGreenHeader";
import AddMemberForm from "../../../components/organisms/AddMemberForm";

export const dynamic = "force-dynamic";

export default async function AddMemberPage() {
  const plans = await getPlans();

  return (
    <>
      <TopGreenHeader mode="add" />
      <AddMemberForm plans={plans} />
    </>
  );
}