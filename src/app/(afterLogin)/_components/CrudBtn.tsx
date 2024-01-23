"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  totalStr?: string;
  query: string;
}

export default function CrudBtn({ title, totalStr, query }: Props) {
  const router = useRouter();
  return (
    <div className="sticky top-0 bg-white">
      <div className="mb-4 flex justify-between pb-3 pt-6">
        <h3 className="text-2xl">{title}</h3>
        <span>
          <b className="text-2xl">{totalStr}</b>
        </span>
      </div>
      <div className="mb-2 grid grid-cols-[45px_auto] grid-rows-1 pb-2">
        <div className="flex h-8 w-8 cursor-pointer items-center justify-center justify-self-start rounded-full bg-slate-600">
          <Image src={"/delete.svg"} width={14} height={14} alt="삭제아이콘" />
        </div>
        <div
          className="flex h-8 w-8 cursor-pointer items-center justify-center justify-self-end rounded-full bg-red-400"
          onClick={() => {
            router.push(`/people/create/${query}`);
          }}
        >
          <Image src={"/create.svg"} width={20} height={20} alt="수정아이콘" />
        </div>
      </div>
    </div>
  );
}
