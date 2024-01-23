"use client";

import BackBtn from "@/app/_components/BackBtn";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import * as z from "zod";

export default function ColorModal() {
  const colorSchema = z.string().regex(/^#?([a-f0-9]{6}|[a-f0-9]{3})$/, {
    message: "색상 코드가 아닙니다.",
  });
  const [color, setColor] = useState("#aabbcc");
  const validResult = colorSchema.safeParse(color);

  return (
    <>
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
        {!validResult.success && (
          <div className="pb-2 text-red-400">
            {validResult.error.format()._errors}
          </div>
        )}
        <div className="mb-2 flex items-start">
          <label className="mt-[10px] basis-16">역할</label>
          <input
            placeholder={"역할"}
            className="w-full border-[1px] border-solid border-gray-200 p-[10px]"
          />
        </div>
        <div className="mb-8 flex items-start">
          <label className="mt-[10px] basis-16">메모</label>
          <textarea
            placeholder="없음"
            className="h-20 w-full resize-none border-[1px] border-solid border-gray-200 p-[10px]"
          ></textarea>
        </div>
        <div className="w-full text-center">
          <button className="rounded bg-red-400 p-2 text-white">저장</button>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-30"></div>
    </>
  );
}
