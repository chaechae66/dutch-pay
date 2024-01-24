"use client";

import { RoleType } from "@/types/types.t";
import Image from "next/image";
import { useState } from "react";

export default function ColorTd({ role }: { role: RoleType }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <tr
      className={`h-12 border-b-[1px] border-solid border-gray-100 ${
        isChecked && "bg-gray-100"
      }`}
      key={role._id}
    >
      <td className="pl-4 align-middle">
        <div
          className="h-6 w-6 rounded border-[1px] border-solid border-gray-200"
          onClick={() => {
            setIsChecked((prev) => !prev);
          }}
        >
          {isChecked && (
            <div className="h-6 w-6 rounded bg-red-300 p-1">
              <Image
                width={20}
                height={20}
                src={"/checked_icon.svg"}
                alt="체크박스아이콘"
              />
            </div>
          )}
        </div>
        <input type="checkbox" className="hidden" defaultChecked={isChecked} />
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
  );
}
