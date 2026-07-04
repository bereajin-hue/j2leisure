export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 px-6 py-10 text-white/60 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-base font-bold text-white">
            제이투레저개발(주)
          </span>
          <span>
            인천광역시 연수구 인천타워대로 301, 더샵송도센텀하이브 B동 822호
          </span>
          <span>대표전화 010-8200-4994 · 제휴문의 bereajin@gmail.com</span>
        </div>
        <span className="text-white/40">
          &copy; {year} J2Leisure Development Co., Ltd. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
