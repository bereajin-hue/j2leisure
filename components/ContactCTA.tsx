import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-navy-900 px-6 py-20 text-white sm:scroll-mt-28 sm:px-10 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent-light">
            Contact
          </span>
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            제휴 문의
          </h2>
          <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            관광·레저·유통 파트너십에 대해 궁금한 점이 있으시면 언제든
            문의해 주세요.
          </p>

          <div className="mt-4 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-accent-light" size={20} />
              <span className="text-sm text-white/80 sm:text-base">
                인천광역시 연수구 인천타워대로 301, 더샵송도센텀하이브 B동 822호
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="shrink-0 text-accent-light" size={20} />
              <a href="tel:010-8200-4994" className="text-sm text-white/80 sm:text-base">
                010-8200-4994
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="shrink-0 text-accent-light" size={20} />
              <a
                href="mailto:bereajin@gmail.com"
                className="text-sm text-white/80 sm:text-base"
              >
                bereajin@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 rounded-2xl bg-white p-10 text-center shadow-xl sm:p-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy-50 text-accent-dark ring-1 ring-navy-100">
            <Phone size={30} />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold text-navy-900 sm:text-xl">
              제휴상담
            </p>
            <p className="text-sm leading-relaxed text-navy-600 sm:text-base">
              제휴·견적 문의는 전화로 편하게 연락 주세요.
              <br />
              바로 안내해 드립니다.
            </p>
          </div>
          <a
            href="tel:010-8200-4994"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-bold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-dark sm:text-xl"
          >
            <Phone size={22} />
            제휴 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}
