import Image from "next/image";
import ColorTable from "../_components/ColorTable";
import Member from "../_components/Member";

async function getData() {
  const res = await fetch("http://localhost:3000/api/people/role", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function People() {
  const peopleData = [
    {
      id: 1,
      nickname: "은일",
      role: { id: 0, role: "방장", bgColor: "#3477eb" },
      image: null,
    },
    {
      id: 2,
      nickname: "은이",
      role: { id: 2, role: "일반", bgColor: "#f1f1f1" },
      image: null,
    },
    {
      id: 3,
      nickname: "은삼",
      role: { id: 2, role: "일반", bgColor: "#f1f1f1" },
      image: null,
    },
    {
      id: 4,
      nickname: "은사",
      role: { id: 2, role: "일반", bgColor: "#f1f1f1" },
      image: null,
    },
    {
      id: 5,
      nickname: "은오",
      role: { id: 2, role: "일반", bgColor: "#f1f1f1" },
      image: null,
    },
    {
      id: 6,
      nickname: "은일",
      role: { id: 2, role: "일반", bgColor: "#f1f1f1" },
      image: null,
    },
    {
      id: 7,
      nickname: "은이",
      role: { id: 2, role: "일반", bgColor: "#f1f1f1" },
      image: null,
    },
    {
      id: 8,
      nickname: "은삼",
      role: { id: 2, role: "일반", bgColor: "#f1f1f1" },
      image: null,
    },
    {
      id: 9,
      nickname: "은사",
      role: { id: 1, role: "부방장", bgColor: "#ff8ae6" },
      image: null,
    },
    {
      id: 10,
      nickname: "은오",
      role: { id: 1, role: "부방장", bgColor: "#ff8ae6" },
      image: null,
    },
  ];

  const roleData = await getData();

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
          <div className="mb-2 grid grid-cols-[45px_auto] grid-rows-1 pb-2">
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center justify-self-start rounded-full bg-slate-600">
              <Image
                src={"/delete.svg"}
                width={14}
                height={14}
                alt="삭제아이콘"
              />
            </div>
            <div
              className="flex h-8 w-8 cursor-pointer items-center justify-center justify-self-end rounded-full bg-red-400"
              // onClick={() => {
              //   router.push(`/people/create/${query}`);
              // }}
            >
              <Image
                src={"/create.svg"}
                width={20}
                height={20}
                alt="수정아이콘"
              />
            </div>
          </div>
        </div>
        <div className="h-[420px] w-full overflow-y-scroll">
          <table className="w-full pl-10 text-left">
            <thead>
              <tr className="h-[40px] border-y-[1px] border-solid border-gray-100 align-middle font-normal text-gray-300">
                <th className="w-[60px] pl-4 align-middle">
                  <div className="h-6 w-6 rounded border-[1px] border-solid border-gray-200"></div>
                  <input type="checkbox" className="hidden" />
                </th>
                <th className="w-[150px] align-middle">닉네임</th>
                <th className="w-[100px] align-middle">역할</th>
                <th className="pr-4 align-middle">메모</th>
              </tr>
            </thead>
            <tbody>
              {peopleData?.map((person) => <Member person={person} />)}
            </tbody>
          </table>
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
