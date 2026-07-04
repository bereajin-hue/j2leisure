interface CaseStudy {
  category: string;
  title: string;
}

const caseStudies: CaseStudy[] = [
  { category: '캠핑장', title: '전남 곡성 캠핑장 판매·운영 대행' },
  { category: '레저타운', title: '경기 고양시 레저타운 판매·운영 및 마케팅' },
  { category: '워터파크', title: '경기 고양 워터파크 판매·운영 대행' },
  { category: '입장권', title: '제주 스카이워터쇼 발권·판매 운영' },
  { category: '유통', title: '인천e몰 입점 및 판매 운영' },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-3 sm:mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Case Studies
          </span>
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl md:text-4xl">
            고객사례
          </h2>
        </div>

        {/* Mobile: card list */}
        <div className="flex flex-col gap-3 sm:hidden">
          {caseStudies.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-1.5 rounded-xl bg-navy-50 p-5 ring-1 ring-navy-100"
            >
              <span className="w-fit rounded-full bg-navy-900 px-3 py-1 text-xs font-semibold text-white">
                {item.category}
              </span>
              <p className="text-sm font-medium text-navy-800">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Desktop/tablet: compact table */}
        <div className="hidden overflow-hidden rounded-2xl ring-1 ring-navy-100 sm:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-navy-900 text-white">
                <th className="w-40 px-6 py-4 text-sm font-semibold">분류</th>
                <th className="px-6 py-4 text-sm font-semibold">내용</th>
              </tr>
            </thead>
            <tbody>
              {caseStudies.map((item, i) => (
                <tr
                  key={item.title}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-navy-50'}
                >
                  <td className="px-6 py-4 align-top text-sm font-semibold text-accent-dark">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 align-top text-sm text-navy-800 sm:text-base">
                    {item.title}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
