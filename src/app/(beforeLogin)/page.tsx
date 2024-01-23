import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <>
      <div className="min-h-dvh w-full">
        <article className="m-h-[700px] grid w-full grid-cols-[repeat(2,auto)] items-center bg-[#CEE7DB]">
          <Image
            className="h-auto w-auto items-end justify-self-end"
            width={400}
            height={220}
            alt="인트로 페이지 배너"
            src={"/bannerBG.png"}
            priority
          />
          <div className="pl-[50px]">
            <div className="mb-[20px]">
              <span className="text-[32px] text-black">복잡한 모임 정산? </span>
              <strong className="text-[32px] font-normal text-indigo-700">
                DutchPay
              </strong>
              <span className="text-[32px] text-black">로 간편하게!</span>
            </div>
            <div className="mb-[35px] text-base font-light">
              우리 모임, 1차는 카페에 2차, 3차 N차는 술 모임을 했다. 1차는
              각계에 N차는 돈 계산한 사람이 다르다. <br />
              심지어 아무개님이 기분 좋다고 골든벨까지 쐈다. 누구는 술을
              안마시고, 누구는 중도 하차를 하였다. <br />
              방장인 나는 이런 것들까지 고려해서 정산을 해야 하는데 모임 정산
              복잡하다!
            </div>
            <Link
              href={"/login"}
              className="rounded-md bg-yellow-400 px-[20px] py-[10px] text-base font-normal text-black"
            >
              카카오 간편 로그인으로 3초 만에 시작
            </Link>
          </div>
        </article>

        <section className="m-h-[480px] mb-[120px] grid grid-cols-2 grid-rows-[200px,auto] justify-evenly px-[150px]">
          <h3 className="col-start-1 col-end-4 self-center justify-self-center text-[32px] font-normal text-black">
            DutchPay 한눈에 서비스 파악하기
          </h3>
          <div className="grid-rows-[110px, 50px, auto] grid h-[350px] w-[320px] items-center justify-items-center bg-[#f9f9f9] px-[60px] py-[40px]">
            <Image
              src={"/intro_icon01.svg"}
              alt="정산하기 icon"
              width={110}
              height={110}
            />
            <b className="text-[22px] font-normal text-black">정산하기</b>
            <div className="text-center text-base text-black">
              논알코올, 골든벨 등 각종 신경 써야하는 항목들을 모두 체크하여,
              편리하게 정산하기!
            </div>
          </div>
          <div className="grid-rows-[110px, 50px, auto] grid h-[350px] w-[320px] items-center justify-items-center bg-[#f9f9f9] px-[60px] py-[40px]">
            <Image
              src={"/intro_icon01.svg"}
              alt="정산하기 icon"
              width={110}
              height={110}
            />
            <b className="text-[22px] font-normal text-black">정산하기</b>
            <div className="text-center text-base text-black">
              논알코올, 골든벨 등 각종 신경 써야하는 항목들을 모두 체크하여,
              편리하게 정산하기!
            </div>
          </div>
          <div className="grid-rows-[110px, 50px, auto] grid h-[350px] w-[320px] items-center justify-items-center bg-[#f9f9f9] px-[60px] py-[40px]">
            <Image
              src={"/intro_icon01.svg"}
              alt="정산하기 icon"
              width={110}
              height={110}
            />
            <b className="text-[22px] font-normal text-black">정산하기</b>
            <div className="text-center text-base text-black">
              논알코올, 골든벨 등 각종 신경 써야하는 항목들을 모두 체크하여,
              편리하게 정산하기!
            </div>
          </div>
        </section>

        <section className="grid h-[400px] w-full  grid-rows-[100px,auto] items-center justify-center bg-indigo-300">
          <h4 className="mt-[40px] text-center text-[32px] font-normal text-white">
            3단계로 간편하게 정산 해보세요!
          </h4>

          <div className="relative h-[210px] w-[556px]">
            <div className="absolute left-0 top-0 grid h-[210px] w-[210px] grid-rows-[repeat(2,auto)] items-center justify-center rounded-full bg-white bg-opacity-60">
              <div className="text-center text-[22px] font-normal text-black">
                1단계
              </div>
              <div className="self-start text-base text-black">
                모임 정보 등록하기
              </div>
            </div>
            <div className="absolute left-[170px] top-0 grid h-[210px] w-[210px] grid-rows-[repeat(2,auto)] items-center justify-center rounded-full bg-white bg-opacity-80">
              <div className="text-center text-[22px] font-normal text-black">
                2단계
              </div>
              <div className="self-start text-base text-black">
                모임 시작 전, 번개 등록
              </div>
            </div>
            <div className="absolute right-0 top-0 grid h-[210px] w-[210px] grid-rows-[repeat(2,auto)] items-center justify-center rounded-full bg-white">
              <div className="text-center text-[22px] font-normal text-black">
                3단계
              </div>
              <div className="self-start text-center text-base text-black">
                모임 끝난 후, <br />
                정산하기 & 차트 확인
              </div>
            </div>
          </div>
        </section>
        <section className="grid h-[300px] grid-cols-1 grid-rows-2 items-center bg-black">
          <div className="text-center text-[32px] font-normal text-white">
            카카오톡으로 간편하게 시작해보세요!
          </div>
          <Link
            href={"/login"}
            className="self-start justify-self-center rounded-md bg-yellow-400 px-[20px] py-[10px] text-base font-normal text-black"
          >
            카카오 간편 로그인으로 3초 만에 시작
          </Link>
        </section>
      </div>
    </>
  );
}
