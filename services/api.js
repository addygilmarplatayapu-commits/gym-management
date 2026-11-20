const BASE_URL = "https://6aff8c137fc363ccff093f91.mockapi.io/api/v1";

export const getPlans = async () => {
  const res = await fetch(`${BASE_URL}/plans`, { cache: "no-store" });
  if (!res.ok) throw new Error("Error cargando planes");
  return res.json();
};

export const getMembers = async () => {
  const res = await fetch(`${BASE_URL}/members`, { cache: "no-store" });
  if (!res.ok) throw new Error("Error cargando miembros");
  return res.json();
};

export const createMember = async (memberData) => {
  const res = await fetch(`${BASE_URL}/members`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(memberData),
  });
  if (!res.ok) throw new Error("Error guardando miembro");
  return res.json();
};