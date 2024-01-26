"use client";

import { RoleType } from "@/types/types.t";
import ColorTd from "./ColorTd";
import React, { MouseEventHandler, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ColorTable({ roleData }: { roleData: RoleType[] }) {
  const [checkItem, setCheckItem] = useState(new Set<string>());
  const [isAllChecked, setIsAllChecked] = useState(false);

  const router = useRouter();

  const checkItemHandler = (id: string, isChecked: boolean) => {
    setCheckItem((prev) => {
      if (isChecked) {
        prev.delete(id);
        return new Set(prev);
      } else {
        prev.add(id);
        return new Set(prev);
      }
    });
  };

  const allCheckedHandle = () => {
    if (isAllChecked) {
      setCheckItem((prev) => {
        prev.clear();
        return new Set(prev);
      });
      setIsAllChecked((prev) => !prev);
    } else {
      setCheckItem(new Set(roleData.map((elem) => elem._id)));
      setIsAllChecked((prev) => !prev);
    }
  };

  const deletecolorHandle: MouseEventHandler = (e) => {
    e.preventDefault();
    fetch("/api/people/role", {
      method: "DELETE",
      body: JSON.stringify([...checkItem]),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          alert("삭제가 완료되었습니다.");
        }
        router.refresh();
      });
  };

  return (
    <>
      <div className="sticky top-0 bg-white">
        <div className="mb-4 flex justify-between pb-3 pt-6">
          <h3 className="text-2xl">역할 관리</h3>
          <span>
            <b className="text-2xl">{roleData.length}개</b>
          </span>
        </div>
        <div className="mb-2 grid grid-cols-[45px_auto] grid-rows-1 pb-2">
          <div
            className="flex h-8 w-8 cursor-pointer items-center justify-center justify-self-start rounded-full bg-slate-600"
            onClick={(e) => {
              deletecolorHandle(e);
            }}
          >
            <Image
              src={"/delete.svg"}
              width={14}
              height={14}
              alt="삭제아이콘"
            />
          </div>
          <div
            className="flex h-8 w-8 cursor-pointer items-center justify-center justify-self-end rounded-full bg-red-400"
            onClick={() => {
              router.push(`/people/color?mode=create`);
            }}
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
      <div className="h-32 w-full overflow-y-scroll">
        <table className="w-full pl-10 text-left">
          <thead>
            <tr className="h-[40px] border-y-[1px] border-solid border-gray-100 align-middle font-normal text-gray-300">
              <th className="w-[60px] pl-4 align-middle">
                <div
                  className="h-6 w-6 rounded border-[1px] border-solid border-gray-200"
                  onClick={() => {
                    allCheckedHandle();
                  }}
                >
                  {isAllChecked && checkItem.size === roleData.length && (
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
              </th>
              <th className="align-middle">컬러</th>
              <th className="align-middle">역할</th>
              <th className="pr-4 align-middle">메모</th>
            </tr>
          </thead>
          <tbody>
            {roleData?.map((role: RoleType) => (
              <ColorTd
                key={role._id}
                role={role}
                checkItemHandler={checkItemHandler}
                checkItem={checkItem}
                isAllChecked={isAllChecked}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
