'use client';

import { useEffect, useState } from 'react';

const slides = [
  { src: '/images/hero/camping.jpg', alt: '캠핑장' },
  { src: '/images/hero/skywatershow.jpg', alt: '제주 스카이워터쇼' },
  { src: '/images/hero/glamping.jpg', alt: '글램핑' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-6 py-24 text-white sm:px-10">
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-navy-950/55" />
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-start gap-6">
        <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium tracking-wide text-white/80">
          제이투레저개발(주)
        </span>

        <h1 className="max-w-3xl break-keep text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
          대한민국 관광·레저·유통 파트너를 위한 End-to-End 운영 솔루션
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

        <div className="mt-2 flex gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`${slide.alt} 슬라이드로 이동`}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? 'w-8 bg-white' : 'w-4 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
