"use client";

import Image from "next/image";
import Member from "./Member";
import { MemberType } from "@/types/types.t";
import { useRouter } from "next/navigation";

interface Props {
  peopleData: MemberType[];
}

export default function MemberTable({ peopleData }: Props) {
  const router = useRouter();
  return (
    <>
      <div className="mb-2 grid grid-cols-[45px_auto] grid-rows-1 pb-2">
        <div className="flex h-8 w-8 cursor-pointer items-center justify-center justify-self-start rounded-full bg-slate-600">
          <Image src={"/delete.svg"} width={14} height={14} alt="삭제아이콘" />
        </div>
        <div
          className="flex h-8 w-8 cursor-pointer items-center justify-center justify-self-end rounded-full bg-red-400"
          onClick={() => {
            router.push(`/people/member`);
          }}
        >
          <Image src={"/create.svg"} width={20} height={20} alt="수정아이콘" />
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
            {peopleData?.map((person) => (
              <Member person={person} key={person.id} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
