"use client";

import { RoleType } from "@/types/types.t";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  role: RoleType;
  checkItemHandler: (id: string, isChecked: boolean) => void;
  checkItem: Set<string>;
  isAllChecked: boolean;
}

export default function ColorTd({
  role,
  checkItemHandler,
  checkItem,
  isAllChecked,
}: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();

  const checkHandle = (id: string) => {
    checkItemHandler(id, isChecked);
  };

  const showModal = () => {
    router.push(`people/color?mode=read&id=${role._id}`);
  };

  useEffect(() => {
    if (isAllChecked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [isAllChecked]);

  return (
    <tr
      className={`h-12 border-b-[1px] border-solid border-gray-100 ${
        checkItem.has(role._id) && "bg-gray-100"
      }`}
      key={role._id}
    >
      <td className="pl-4 align-middle">
        <div
          className="z-10 h-6 w-6 rounded border-[1px] border-solid border-gray-200"
          onClick={() => {
            setIsChecked((prev) => !prev);
            checkHandle(role._id);
          }}
        >
          {checkItem.has(role._id) && (
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
      </td>
      <td
        className="flex h-12 items-center"
        onClick={() => {
          showModal();
        }}
      >
        <div
          className={`mr-2 h-5 w-5 rounded`}
          style={{
            backgroundColor: role.bgColor,
          }}
        ></div>
        {role.bgColor}
      </td>
      <td
        className="align-middle"
        onClick={() => {
          showModal();
        }}
      >
        {role.role}
      </td>
      <td
        className="pr-4 align-middle"
        onClick={() => {
          showModal();
        }}
      >
        없음
      </td>
    </tr>
  );
}
