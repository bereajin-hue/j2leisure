export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-800 to-navy-600 px-6 py-24 text-white sm:px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(14,159,110,0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(83,111,167,0.35), transparent 45%)',
        }}
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-start gap-6">
        <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium tracking-wide text-white/80">
          제이투레저개발(주)
        </span>

        <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          대한민국 관광·레저·유통 파트너를 위한
          <br className="hidden sm:block" /> End-to-End 운영 솔루션
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
          예약·결제 시스템 구축부터 현장 운영, 판매 대행, 마케팅까지 함께합니다.
        </p>

        <a
          href="#contact"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-dark sm:text-lg"
        >
          제휴 문의하기
        </a>
      </div>
    </section>
  );
}
