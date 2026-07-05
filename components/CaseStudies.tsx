'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CaseStudy {
  category: string;
  title: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    category: '캠핑장',
    title: '전남 곡성 캠핑장 판매·운영 대행',
    image: '/images/case-studies/camping.jpg',
  },
  {
    category: '레저타운',
    title: '경기 고양시 레저타운 판매·운영 및 마케팅',
    image: '/images/case-studies/leisure-town.jpg',
  },
  {
    category: '워터파크',
    title: '경기 고양 워터파크 판매·운영 대행',
    image: '/images/case-studies/waterpark.jpg',
  },
  {
    category: '입장권',
    title: '제주 스카이워터쇼 발권·판매 운영',
    image: '/images/case-studies/skywatershow.jpg',
  },
  {
    category: '유통',
    title: '인천e몰 입점 및 판매 운영',
    image: '/images/case-studies/incheon-emall.jpg',
  },
];

export default function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'prev' | 'next') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth ?? 300;
    el.scrollBy({
      left: direction === 'next' ? cardWidth + 24 : -(cardWidth + 24),
      behavior: 'smooth',
    });
  };

  return (
    <section id="case-studies" className="scroll-mt-16 bg-white px-6 py-20 sm:scroll-mt-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:mb-16 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">
              Case Studies
            </span>
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl md:text-4xl">
              고객사례
            </h2>
          </div>

          <div className="flex gap-2 self-end">
            <button
              type="button"
              aria-label="이전 사례"
              onClick={() => scroll('prev')}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-50 text-navy-700 ring-1 ring-navy-100 transition-colors hover:bg-navy-100"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="다음 사례"
              onClick={() => scroll('next')}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-50 text-navy-700 ring-1 ring-navy-100 transition-colors hover:bg-navy-100"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {caseStudies.map((item) => (
            <div
              key={item.title}
              className="flex w-72 shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy-100 sm:w-80"
            >
              <div className="relative h-48 w-full bg-navy-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-navy-900/90 px-3 py-1 text-xs font-semibold text-white">
                  {item.category}
                </span>
              </div>
              <div className="flex flex-1 items-center p-5">
                <p className="text-sm leading-relaxed text-navy-800 sm:text-base">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
