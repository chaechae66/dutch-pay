import BackBtn from "@/app/_components/BackBtn";
import MemberModalImg from "./MemberModalImg";

export default function MemberModal() {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 z-20 box-content min-h-80 w-80 translate-x-[-50%] translate-y-[-50%] bg-white p-10">
        <div className="mb-10 flex h-8 w-full items-center justify-between">
          <h2 className="text-2xl">모임원 추가</h2>
          <BackBtn />
        </div>
        <div className="mb-6 flex w-full flex-col items-center justify-center">
          <MemberModalImg />
        </div>
        <div className="mb-2 flex items-start">
          <label className="mt-[10px] basis-16">닉네임</label>
          <input
            placeholder={"닉네임"}
            className="w-full border-[1px] border-solid border-gray-200 p-[10px]"
          />
        </div>
        <div className="mb-2 flex items-start">
          <label className="mt-[10px] basis-16">역할</label>
          <select className="w-full border-[1px] border-solid border-gray-200 p-[10px]">
            <option>방장</option>
            <option>부방장</option>
            <option>일반</option>
          </select>
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
