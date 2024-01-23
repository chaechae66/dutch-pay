import CrudBtn from "../_components/CrudBtn";
import Member from "../_components/Member";

export default function People() {
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

  const roleData = [
    { id: 0, role: "방장", bgColor: "#3477eb" },
    { id: 1, role: "부방장", bgColor: "#fa65da" },
    { id: 2, role: "일반", bgColor: "#f1f1f1" },
  ];

  return (
    <div className="grid h-full grid-cols-2 grid-rows-2">
      <div className="row-start-1 row-end-4 h-[37.5rem] w-full overflow-y-auto rounded-xl bg-white px-6 pb-6">
        <CrudBtn
          title="모임원 관리"
          totalStr={`${peopleData.length}명`}
          query="member"
        />
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
      <div className="mb-10 ml-10 rounded-xl bg-white p-6">
        <h3 className="text-2xl">모임원 참여율</h3>
      </div>
      <div className="ml-10 h-[18.75rem] overflow-y-auto rounded-xl bg-white px-6 pb-6">
        <CrudBtn title="역할 관리" query="color" />
        <table className="w-full pl-10 text-left">
          <thead>
            <tr className="h-[40px] border-y-[1px] border-solid border-gray-100 align-middle font-normal text-gray-300">
              <th className="w-[60px] pl-4 align-middle">
                <div className="h-6 w-6 rounded border-[1px] border-solid border-gray-200"></div>
                <input type="checkbox" className="hidden" />
              </th>
              <th className="align-middle">컬러</th>
              <th className="align-middle">역할</th>
              <th className="pr-4 align-middle">메모</th>
            </tr>
          </thead>
          <tbody>
            {roleData?.map((role) => (
              <tr
                className="h-12 border-b-[1px] border-solid border-gray-100"
                key={role.id}
              >
                <td className="pl-4 align-middle">
                  <div className="h-6 w-6 rounded border-[1px] border-solid border-gray-200"></div>
                  <input type="checkbox" className="hidden" />
                </td>
                <td className="flex h-12 items-center">
                  <div
                    className={`mr-2 h-5 w-5 rounded`}
                    style={{
                      backgroundColor: role.bgColor,
                    }}
                  ></div>
                  {role.bgColor}
                </td>
                <td className="align-middle">{role.role}</td>
                <td className="pr-4 align-middle">없음</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
