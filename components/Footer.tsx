export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 px-6 py-10 text-white/60 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-base font-bold text-white">
              유니버스레저(주)
            </span>
            <span>
              인천광역시 연수구 인천타워대로 301, 더샵송도센텀하이브 B동 822호
            </span>
            <span>대표전화 010-8200-4994 · 제휴문의 bereajin@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/privacy/"
              className="font-semibold text-white/80 underline-offset-2 hover:text-white hover:underline"
            >
              개인정보처리방침
            </a>
            <a
              href="/terms/"
              className="font-semibold text-white/80 underline-offset-2 hover:text-white hover:underline"
            >
              이용약관
            </a>
          </div>
        </div>
        <span className="border-t border-white/10 pt-4 text-white/40">
          &copy; {year} Universe Leisure Co., Ltd. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
