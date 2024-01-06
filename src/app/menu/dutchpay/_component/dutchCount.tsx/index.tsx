import React, { ChangeEventHandler, useState } from "react";

export default function DutchCount({ count }: { count: number }) {
  const [group, setGroup] = useState<string[] | []>([]);
  const [allPay, setAllPay] = useState<string | null>(null);
  const [allPayPrice, setAllPayPrice] = useState<number | null>(null);
  const [dutchReceipt, setDutchReceipt] = useState([]);

  const handleGroupChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(allPay);
    const optionValue = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setGroup([...group, optionValue]);
    } else {
      const updatedOptions = group.filter((option) => option !== optionValue);
      setGroup(updatedOptions);
    }
  };

  const handleAllPayChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const optionValue = e.target.value;
    setAllPay(optionValue);
  };

  const onAllPayInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAllPay(e.target.value);
    const allPayUser = groups.filter((person) => person.nickname === allPay);
    console.log(allPayUser);
  };

  //더미데이터
  const groups = [
    { nickname: "일영", userId: 1, id: "111" },
    { nickname: "이영", userId: 2, id: "222" },
    { nickname: "삼영", userId: 3, id: "333" },
    { nickname: "사영", userId: 4, id: "444" },
  ];

  return (
    <>
      <p>오늘 {count}차 참여한 사람들을 선택해주세요</p>
      {/*더미데이터*/}
      <div>
        {groups.map((user) => {
          return (
            <span key={user.id}>
              <input
                type="checkbox"
                name="group"
                value={user.nickname}
                onChange={handleGroupChange}
              />
              <label>{user.nickname}</label>
            </span>
          );
        })}
      </div>
      {group.length !== 0 && (
        <>
          <p>이 중에 모든 값을 계산한 사람이 있나요?</p>
          <input
            type="radio"
            name={"allpay"}
            value={"없음"}
            onChange={handleAllPayChange}
          />
          <label htmlFor="없음">없음</label>
          {group.map((person) => {
            return (
              <span key={person}>
                <input
                  type="radio"
                  name="allpay"
                  value={person}
                  onChange={handleAllPayChange}
                />
                <label htmlFor={person}>{person}</label>
              </span>
            );
          })}
        </>
      )}
      {allPay && allPay !== "없음" && (
        <>
          <p>총 가격이 어떻게 될까요?</p>
          <input type="number" min={0} onChange={onAllPayInput} />
        </>
      )}
    </>
  );
}
