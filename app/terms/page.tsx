import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '이용약관 | (주)유니버스레저',
  description: '(주)유니버스레저 이용약관',
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 text-navy-800 sm:px-10 sm:py-24">
        <h1 className="mb-12 text-2xl font-bold text-navy-900 sm:text-3xl">
          이용약관
        </h1>

        <div className="flex flex-col gap-10">
          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제1조 (목적)
            </h2>
            <p className="leading-relaxed text-navy-700">
              본 약관은 주식회사 유니버스레저(이하 &quot;회사&quot;)가
              운영하는 홈페이지(이하 &quot;사이트&quot;)의 이용과 관련하여
              회사와 이용자의 권리, 의무 및 책임사항 등 필요한 사항을
              규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제2조 (용어의 정의)
            </h2>
            <ul className="list-disc space-y-1 pl-5 leading-relaxed text-navy-700">
              <li>&quot;사이트&quot;란 회사가 운영하는 홈페이지를 말합니다.</li>
              <li>
                &quot;이용자&quot;란 사이트에 접속하여 본 약관에 따라 회사가
                제공하는 서비스를 이용하는 자를 말합니다.
              </li>
              <li>
                &quot;서비스&quot;란 회사가 사이트를 통해 제공하는
                회사소개, 사업안내, 문의하기 등 일체의 서비스를 말합니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제3조 (약관의 효력 및 변경)
            </h2>
            <p className="mb-2 leading-relaxed text-navy-700">
              ① 본 약관은 사이트에 게시함으로써 효력이 발생합니다.
            </p>
            <p className="leading-relaxed text-navy-700">
              ② 회사는 관계 법령을 위반하지 않는 범위에서 본 약관을 변경할
              수 있으며, 변경된 약관은 사이트에 공지함으로써 효력이
              발생합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제4조 (서비스의 제공)
            </h2>
            <p className="mb-3 leading-relaxed text-navy-700">
              회사는 다음 각 호의 서비스를 제공합니다.
            </p>
            <ul className="list-disc space-y-1 pl-5 leading-relaxed text-navy-700">
              <li>회사 및 사업 관련 정보 제공</li>
              <li>프로젝트 및 사업 소개</li>
              <li>문의 접수 및 상담</li>
              <li>기타 회사가 정하는 서비스</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제5조 (서비스의 이용)
            </h2>
            <p className="mb-2 leading-relaxed text-navy-700">
              ① 사이트 이용은 연중무휴, 1일 24시간을 원칙으로 합니다.
            </p>
            <p className="mb-2 leading-relaxed text-navy-700">
              ② 회사는 다음 각 호의 경우 서비스의 전부 또는 일부를 일시적으로
              중단할 수 있습니다.
            </p>
            <ul className="mb-3 list-disc space-y-1 pl-5 leading-relaxed text-navy-700">
              <li>시스템 점검 및 유지보수</li>
              <li>설비의 장애 또는 고장</li>
              <li>천재지변, 정전 등 불가항력적인 사유</li>
              <li>기타 회사가 서비스 운영상 필요하다고 판단하는 경우</li>
            </ul>
            <p className="leading-relaxed text-navy-700">
              ③ 회사는 서비스의 중단으로 인해 발생한 손해에 대하여 관계
              법령에서 정한 경우를 제외하고는 책임을 지지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제6조 (이용자의 의무)
            </h2>
            <p className="mb-3 leading-relaxed text-navy-700">
              이용자는 다음 각 호의 행위를 하여서는 안 됩니다.
            </p>
            <ul className="list-disc space-y-1 pl-5 leading-relaxed text-navy-700">
              <li>관계 법령을 위반하는 행위</li>
              <li>회사의 업무를 방해하는 행위</li>
              <li>회사 또는 제3자의 명예를 훼손하거나 권리를 침해하는 행위</li>
              <li>허위 정보를 이용하여 문의하는 행위</li>
              <li>시스템에 악영향을 줄 수 있는 행위</li>
              <li>기타 공공질서와 미풍양속에 반하는 행위</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제7조 (문의하기 이용)
            </h2>
            <p className="mb-2 leading-relaxed text-navy-700">
              ① 이용자는 문의하기를 이용할 때 사실에 근거한 정보를 제공하여야
              합니다.
            </p>
            <p className="mb-2 leading-relaxed text-navy-700">
              ② 회사는 접수된 문의에 대하여 성실히 답변하도록 노력합니다.
            </p>
            <p className="mb-2 leading-relaxed text-navy-700">
              ③ 문의 내용 중 다음 각 호에 해당하는 경우 회사는 답변을 하지
              않거나 삭제할 수 있습니다.
            </p>
            <ul className="list-disc space-y-1 pl-5 leading-relaxed text-navy-700">
              <li>허위 또는 타인의 정보를 사용하는 경우</li>
              <li>욕설, 비방 또는 명예훼손 내용이 포함된 경우</li>
              <li>광고성 또는 반복적인 문의</li>
              <li>관계 법령에 위반되는 내용</li>
              <li>기타 정상적인 서비스 운영을 방해하는 경우</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제8조 (지식재산권)
            </h2>
            <p className="mb-2 leading-relaxed text-navy-700">
              ① 사이트에 게시된 모든 콘텐츠(문서, 이미지, 디자인, 로고 등)의
              저작권 및 지식재산권은 회사 또는 정당한 권리자에게 있습니다.
            </p>
            <p className="leading-relaxed text-navy-700">
              ② 이용자는 회사의 사전 서면 동의 없이 사이트의 콘텐츠를 복제,
              배포, 수정, 전송, 판매하거나 영리 목적으로 이용할 수 없습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제9조 (개인정보 보호)
            </h2>
            <p className="leading-relaxed text-navy-700">
              회사는 이용자의 개인정보를 관계 법령에 따라 보호하며,
              개인정보의 수집 및 이용에 관한 사항은 별도의{' '}
              <a href="/privacy/" className="text-accent-dark underline">
                「개인정보처리방침」
              </a>
              에 따릅니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제10조 (면책사항)
            </h2>
            <p className="mb-2 leading-relaxed text-navy-700">
              ① 회사는 천재지변, 시스템 장애, 통신망 장애 등 회사의
              합리적인 통제 범위를 벗어난 사유로 발생한 서비스 중단에
              대하여 책임을 지지 않습니다.
            </p>
            <p className="mb-2 leading-relaxed text-navy-700">
              ② 회사는 이용자가 사이트에서 제공되는 정보를 활용하여 발생한
              결과에 대하여 법령상 책임이 인정되는 경우를 제외하고 책임을
              지지 않습니다.
            </p>
            <p className="leading-relaxed text-navy-700">
              ③ 회사는 이용자의 귀책사유로 발생한 손해에 대하여 책임을 지지
              않습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제11조 (준거법 및 관할법원)
            </h2>
            <p className="mb-2 leading-relaxed text-navy-700">
              ① 본 약관은 대한민국 법령에 따라 해석되고 적용됩니다.
            </p>
            <p className="leading-relaxed text-navy-700">
              ② 서비스 이용과 관련하여 회사와 이용자 사이에 분쟁이 발생한
              경우, 당사자 간 협의를 우선하며 협의가 이루어지지 않을 경우
              관계 법령에 따른 관할 법원을 전속관할법원으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              부칙
            </h2>
            <p className="leading-relaxed text-navy-700">
              본 약관은 2026년 7월 1일부터 시행합니다.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
