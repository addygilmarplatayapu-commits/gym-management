import { getMembers } from "../../services/api";
import TopGreenHeader from "../../components/molecules/TopGreenHeader";
import MembersGrid from "../../components/organisms/MembersGrid";

export const dynamic = "force-dynamic";

export default async function MembersPage() {
  const members = await getMembers();

  return (
    <>
      <TopGreenHeader mode="list" />
      <MembersGrid members={members} />
    </>
  );
}