import Link from "next/link";

export default function menu() {
  return (
    <>
      <Link href={"menu/dutchpay"}>정산 하기</Link>
      <button>모임 일정</button>
      <button>모임 정보</button>
    </>
  );
}
