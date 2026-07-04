import { MapPin, Ticket, Package, TrendingUp, type LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: MapPin,
    title: '관광·레저 운영 대행',
    description:
      '네이버 예약/예매 시스템 구축 및 N페이 결제 연동으로 온라인 예약 전환율을 높입니다.',
  },
  {
    icon: Ticket,
    title: '입장권 발권 시스템',
    description:
      '키오스크 설치부터 N페이 결제 연동까지, 무인 발권 환경을 원스톱으로 구축합니다.',
  },
  {
    icon: Package,
    title: '유통 대행',
    description:
      '인천e몰 입점 및 판매 운영, 복지몰·폐쇄몰 채널을 통한 상품 공급을 지원합니다.',
  },
  {
    icon: TrendingUp,
    title: '마케팅 컨설팅',
    description:
      '네이버플레이스 SEO 최적화와 인플루언서 체험단 운영으로 지역 기반 고객 유입을 확대합니다.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-navy-50 px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-3 sm:mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Services
          </span>
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl md:text-4xl">
            사업분야
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-navy-100 transition-shadow hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-accent-light">
                  <Icon size={26} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-navy-900 sm:text-xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-600 sm:text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
