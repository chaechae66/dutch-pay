"use client";

import { FormEventHandler, useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import * as z from "zod";

import BackBtn from "@/app/_components/BackBtn";
import { useRouter, useSearchParams } from "next/navigation";
import { RoleType } from "@/types/types.t";

export default function ColorModal() {
  const params = useSearchParams();
  const colorSchema = z.string().regex(/^#([a-f0-9]{6}|[a-f0-9]{3})$/, {
    message: "색상 코드가 아닙니다.",
  });
  const roleSchema = z.string().min(1, {
    message: "역할은 비울 수 없습니다.",
  });

  const [color, setColor] = useState("#aabbcc");
  const [role, setRole] = useState<string>("0");
  const [memo, setMemo] = useState<null | string>(null);

  const validColorResult = colorSchema.safeParse(color);
  const validRoleResult = roleSchema.safeParse(role);
  const router = useRouter();

  useEffect(() => {
    const id = params?.get("id");

    if (id) {
      fetch(`/api/people/${id}`)
        .then((data) => data.json())
        .then((data: RoleType) => {
          setColor(data.bgColor);
          setRole(data.role);
        })
        .catch((e) => console.error(e));
    }
  }, []);

  const colorHandle: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!validColorResult.success || !validRoleResult.success) {
      alert("양식에 맞춰주세요.");
      return;
    }

    const roleInfo = {
      bgColor: color,
      role,
    };

    await fetch("/api/people/role", {
      method: "POST",
      body: JSON.stringify(roleInfo),
    })
      .then(() => {
        alert("성공적으로 저장이 되었습니다.");
        router.refresh();
        router.back();
      })
      .catch((e) => console.error(e));
  };

  return (
    <form onSubmit={colorHandle}>
      <div className="absolute left-1/2 top-1/2 z-20 box-content min-h-80 w-80 translate-x-[-50%] translate-y-[-50%] bg-white p-10">
        <div className="mb-10 flex h-8 w-full items-center justify-between">
          <h2 className="text-2xl">역할 추가</h2>
          <BackBtn />
        </div>
        <div className="mb-6 flex w-full justify-center">
          <HexColorPicker color={color} onChange={setColor} />
        </div>
        <div className="mb-2 flex items-start">
          <label className="mt-[10px] basis-16">컬러</label>
          <input
            onChange={(e) => {
              setColor(e.target.value);
            }}
            value={color}
            className="w-full border-[1px] border-solid border-gray-200 p-[10px]"
          />
        </div>
        {!validColorResult.success && (
          <div className="pb-2 text-red-400">
            {validColorResult.error.format()._errors}
          </div>
        )}
        <div className="mb-2 flex items-start">
          <label className="mt-[10px] basis-16">역할</label>
          <input
            placeholder={"역할"}
            value={role!}
            onChange={(e) => {
              setRole(e.target.value);
            }}
            className="w-full border-[1px] border-solid border-gray-200 p-[10px]"
          />
        </div>
        {!validRoleResult.success && (
          <div className="pb-2 text-red-400">
            {validRoleResult.error.format()._errors}
          </div>
        )}
        <div className="mb-8 flex items-start">
          <label className="mt-[10px] basis-16">메모</label>
          <textarea
            defaultValue={memo!}
            onChange={(e) => {
              setMemo(e.target.value);
            }}
            placeholder="없음"
            className="h-20 w-full resize-none border-[1px] border-solid border-gray-200 p-[10px]"
          ></textarea>
        </div>
        <div className="w-full text-center">
          <button type="submit" className="rounded bg-red-400 p-2 text-white">
            {params?.get("mode") === "create" ? "저장" : "수정"}
          </button>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-30"></div>
    </form>
  );
}
