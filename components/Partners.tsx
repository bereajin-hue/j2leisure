interface Partner {
  name: string;
  description: string;
  logo?: string;
}

// 공식 브랜드 로고 원본이 준비되면 public/images/partners/ 파일을 교체해주세요.
const partners: Partner[] = [
  {
    name: 'Naver',
    description: '네이버플레이스 서비스 공식 운영대행',
    logo: '/images/partners/naver.svg',
  },
  {
    name: '인천e몰',
    description: '레저 카테고리 전담 판매운영사',
    logo: '/images/partners/incheon-emall.svg',
  },
  {
    name: '유니버스코리아',
    description: '복지몰·폐쇄몰 상품 유통 및 판매 대행 파트너',
    logo: '/images/partners/universe-korea.svg',
  },
];

export default function Partners() {
  return (
    <section id="partners" className="scroll-mt-16 bg-navy-50 px-6 py-20 sm:scroll-mt-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-3 sm:mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Partners
          </span>
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl md:text-4xl">
            사업 파트너
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-navy-100"
            >
              <div className="flex h-16 w-full items-center justify-center rounded-lg bg-navy-50 ring-1 ring-navy-100">
                {partner.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={partner.logo}
                    alt={`${partner.name} 로고`}
                    className="max-h-12 max-w-[80%] object-contain"
                  />
                ) : (
                  <span className="text-lg font-bold text-navy-800">
                    {partner.name}
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed text-navy-600 sm:text-base">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
