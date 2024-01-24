import { RoleType } from "@/types/types.t";
import ColorTd from "./ColorTd";

async function getData() {
  const res = await fetch("http://localhost:3000/api/people/role/read", {
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ColorTable() {
  const roleData = await getData();

  return (
    <>
      {roleData?.map((role: RoleType) => (
        <ColorTd key={role._id} role={role} />
      ))}
    </>
  );
}
