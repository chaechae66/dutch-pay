"use client";
import Image from "next/image";
import { ChangeEventHandler, useRef } from "react";

export default function MemberModalImg() {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const onUploadImg: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (!e.target.files) {
      return;
    }
    console.log(e.target.files[0].name);
  };
  return (
    <>
      <div className="flex h-[80px] w-[80px] justify-center rounded-full bg-gray-200">
        <Image
          src={"/no_image.svg"}
          alt="프로필 사진 없을 때"
          width={40}
          height={40}
        />
        <input
          className="hidden"
          type="file"
          accept="image/*"
          ref={imgRef}
          onChange={onUploadImg}
        />
      </div>
      <button
        onClick={() => {
          imgRef.current?.click();
        }}
        className="mt-2 rounded bg-slate-700 p-[4px] text-xs text-white"
      >
        사진 업로드
      </button>
    </>
  );
}
