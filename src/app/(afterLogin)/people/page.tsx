import Image from "next/image";
import ColorTable from "../_components/ColorTable";
import Member from "../_components/Member";
import MemberTable from "../_components/MemberTable";

async function getRoleData() {
  const res = await fetch("http://localhost:3000/api/people/role", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getMemberData() {
  const res = await fetch("http://localhost:3000/api/people/member", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function People() {
  const roleData = await getRoleData();
  const peopleData = await getMemberData();

  return (
    <div className="grid h-full grid-cols-2 grid-rows-2">
      <div className="row-start-1 row-end-4 h-[37.5rem] w-full rounded-xl bg-white px-6 pb-6">
        <div className="sticky top-0 bg-white">
          <div className="mb-4 flex justify-between pb-3 pt-6">
            <h3 className="text-2xl">모임원 관리</h3>
            <span>
              <b className="text-2xl">{peopleData.length}명</b>
            </span>
          </div>
          <MemberTable peopleData={peopleData} />
        </div>
      </div>
      <div className="mb-10 ml-10 rounded-xl bg-white p-6">
        <h3 className="text-2xl">모임원 참여율</h3>
      </div>
      <div className="ml-10 h-[18.75rem] rounded-xl bg-white px-6 pb-6">
        <ColorTable roleData={roleData} />
      </div>
    </div>
  );
}
