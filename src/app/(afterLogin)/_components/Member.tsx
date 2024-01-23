"use client";

import { MemberType } from "@/types/types.d.t.js";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Member({ person }: { person: MemberType }) {
  const router = useRouter();
  return (
    <tr
      onClick={() => {
        router.push("/people/member");
      }}
      className="h-16 border-b-[1px] border-solid border-gray-100 font-normal"
      key={person.id}
    >
      <td className="pl-4 align-middle">
        <div className="h-6 w-6 rounded border-[1px] border-solid border-gray-200"></div>
        <input type="checkbox" className="hidden" />
      </td>
      <td className="flex h-16 items-center align-middle">
        {person.image || (
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100 p-[5px] text-center text-xs font-extralight">
            <Image
              src={"/no_image.svg"}
              alt="프로필 사진 없을 때"
              width={24}
              height={24}
            />
          </div>
        )}
        <p>{person.nickname}</p>
      </td>
      <td className="align-middle">
        <div className="flex items-center">
          <div
            className={`mr-2 h-5 w-5 rounded`}
            style={{
              backgroundColor: person.role.bgColor,
            }}
          ></div>
          <div>{person.role.role}</div>
        </div>
      </td>
      <td className="pr-4 align-middle">없음</td>
    </tr>
  );
}
