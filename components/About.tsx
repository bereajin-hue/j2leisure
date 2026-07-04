import { Wrench, Settings, ShoppingBag, Megaphone, ArrowRight } from 'lucide-react';

const steps = [
  { label: '구축', icon: Wrench },
  { label: '운영', icon: Settings },
  { label: '판매', icon: ShoppingBag },
  { label: '마케팅', icon: Megaphone },
];

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            About Us
          </span>
          <h2 className="text-2xl font-bold leading-snug text-navy-900 sm:text-3xl md:text-4xl">
            회사소개
          </h2>
          <p className="text-base leading-loose text-navy-700 sm:text-lg">
            제이투레저개발(주)은 대한민국 관광·레저·유통 파트너를 위한
            End-to-End 운영 솔루션을 제공합니다.
            <br />
            <br />
            예약·결제 시스템 구축부터 현장 운영, 판매 대행, 마케팅까지 —
            파트너사가 본연의 서비스에만 집중할 수 있도록 전 과정을
            함께합니다.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex items-center gap-4 sm:flex-col sm:gap-3">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-navy-50 text-navy-700 ring-1 ring-navy-100">
                    <Icon size={32} strokeWidth={1.75} />
                  </div>
                  <span className="text-sm font-semibold text-navy-900 sm:text-base">
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight
                    className="hidden shrink-0 text-navy-200 sm:block"
                    size={22}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
