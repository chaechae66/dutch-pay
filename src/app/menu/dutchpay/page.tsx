"use client";

import DutchCount from "@/app/menu/dutchpay/_component/dutchCount.tsx";
import { ChangeEvent, useState } from "react";

export default function dutchpay() {
  const [dutchCount, setDutchCount] = useState("1");
  const [isChange, setIsChange] = useState(false);
  const [count, setCount] = useState(0);
  const [isFinish, setIsfinish] = useState(false);
  const [receipt, setReceipt] = useState([]);
  return (
    <>
      <p>오늘 몇 차까지 진행하셨어요?</p>
      <select
        onChange={(e: ChangeEvent) => {
          setDutchCount((e.target as HTMLSelectElement).value);
        }}
        value={dutchCount}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <br />
      <button
        onClick={() => {
          setIsChange(true);
        }}
      >
        다음
      </button>
      {isChange &&
        [...Array(Number(dutchCount))].map((_, index) => {
          return (
            <div key={index}>
              {index === count && <DutchCount count={index + 1} />}

              {isFinish && <button>다음 차</button>}
            </div>
          );
        })}
    </>
  );
}
