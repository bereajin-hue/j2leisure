import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '개인정보처리방침 | (주)유니버스레저',
  description: '(주)유니버스레저 개인정보처리방침',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 text-navy-800 sm:px-10 sm:py-24">
        <h1 className="mb-2 text-2xl font-bold text-navy-900 sm:text-3xl">
          개인정보처리방침
        </h1>
        <p className="mb-12 leading-relaxed text-navy-600">
          주식회사 유니버스레저(이하 &quot;회사&quot;)는 「개인정보 보호법」
          제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을
          신속하고 원활하게 처리하기 위하여 다음과 같이 개인정보처리방침을
          수립·공개합니다.
        </p>

        <div className="flex flex-col gap-10">
          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제1조 (개인정보의 처리 목적)
            </h2>
            <p className="mb-3 leading-relaxed text-navy-700">
              회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고
              있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
              이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라
              필요한 조치를 이행하겠습니다.
            </p>
            <ul className="list-disc space-y-1 pl-5 leading-relaxed text-navy-700">
              <li>문의사항 접수 및 상담</li>
              <li>문의사항 확인 및 답변</li>
              <li>상담 진행 및 요청사항 처리</li>
              <li>민원 처리 및 결과 회신</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제2조 (처리하는 개인정보 항목)
            </h2>
            <p className="mb-3 leading-relaxed text-navy-700">
              회사는 다음의 개인정보를 처리합니다.
            </p>
            <p className="leading-relaxed text-navy-700">
              <span className="font-semibold text-navy-900">문의하기</span>
              <br />
              수집항목 : 이름, 이메일, 연락처, 문의내용
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제3조 (개인정보의 처리 및 보유기간)
            </h2>
            <p className="mb-2 leading-relaxed text-navy-700">
              ① 회사는 개인정보를 수집·이용 목적이 달성될 때까지 보유하며,
              목적 달성 후에는 지체 없이 파기합니다.
            </p>
            <p className="leading-relaxed text-navy-700">
              ② 다만, 관계 법령에 따라 개인정보를 보존하여야 하는 경우에는
              해당 법령에서 정한 기간 동안 보관합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제4조 (개인정보의 제3자 제공)
            </h2>
            <p className="leading-relaxed text-navy-700">
              회사는 정보주체의 개인정보를 제1조에서 명시한 목적 범위
              내에서만 처리하며, 정보주체의 동의 또는 관계 법령에 특별한
              규정이 있는 경우를 제외하고는 개인정보를 제3자에게 제공하지
              않습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제5조 (정보주체의 권리·의무 및 행사방법)
            </h2>
            <p className="mb-2 leading-relaxed text-navy-700">
              ① 정보주체는 회사에 대하여 언제든지 다음 각 호의 권리를 행사할
              수 있습니다.
            </p>
            <ul className="mb-3 list-disc space-y-1 pl-5 leading-relaxed text-navy-700">
              <li>개인정보 열람 요구</li>
              <li>개인정보 정정·삭제 요구</li>
              <li>개인정보 처리정지 요구</li>
            </ul>
            <p className="mb-2 leading-relaxed text-navy-700">
              ② 권리 행사는 서면, 전자우편 등을 통하여 할 수 있으며, 회사는
              지체 없이 필요한 조치를 하겠습니다.
            </p>
            <p className="leading-relaxed text-navy-700">
              ③ 정보주체가 개인정보의 정정 또는 삭제를 요구한 경우에는 정정
              또는 삭제가 완료될 때까지 해당 개인정보를 이용하거나 제공하지
              않습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제6조 (개인정보의 파기)
            </h2>
            <p className="mb-2 leading-relaxed text-navy-700">
              ① 회사는 개인정보의 보유기간이 경과하거나 처리목적이 달성된
              경우 지체 없이 해당 개인정보를 파기합니다.
            </p>
            <p className="mb-3 leading-relaxed text-navy-700">
              ② 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는
              해당 개인정보를 별도로 보관합니다.
            </p>
            <p className="mb-2 leading-relaxed text-navy-700">
              ③ 개인정보의 파기 절차 및 방법은 다음과 같습니다.
            </p>
            <ul className="list-disc space-y-1 pl-5 leading-relaxed text-navy-700">
              <li>
                파기 절차 : 파기 사유가 발생한 개인정보를 선정하여
                개인정보 보호책임자의 승인 후 파기합니다.
              </li>
              <li>
                파기 방법 : 전자적 파일은 복구할 수 없는 방법으로
                삭제하며, 종이 문서는 분쇄 또는 소각합니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제7조 (개인정보의 안전성 확보조치)
            </h2>
            <p className="mb-3 leading-relaxed text-navy-700">
              회사는 개인정보의 안전성 확보를 위하여 다음과 같은 조치를
              시행하고 있습니다.
            </p>
            <ul className="list-disc space-y-1 pl-5 leading-relaxed text-navy-700">
              <li>관리적 조치 : 내부관리계획 수립 및 시행</li>
              <li>기술적 조치 : 접근권한 관리, 보안프로그램 운영 등</li>
              <li>물리적 조치 : 개인정보 보관장소 접근 통제</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제8조 (개인정보 보호책임자)
            </h2>
            <p className="mb-3 leading-relaxed text-navy-700">
              회사는 개인정보 처리에 관한 업무를 총괄하기 위하여 아래와 같이
              개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <div className="mb-3 rounded-lg bg-navy-50 p-4 leading-relaxed text-navy-700 ring-1 ring-navy-100">
              <p className="mb-1 font-semibold text-navy-900">
                개인정보 보호책임자
              </p>
              <p>성명 : 정성훈</p>
              <p>직책 : 대표이사</p>
              <p>이메일 : bereajin@gmail.com</p>
            </div>
            <p className="leading-relaxed text-navy-700">
              정보주체는 개인정보 처리와 관련한 문의, 불만처리, 피해구제
              등을 개인정보 보호책임자에게 문의할 수 있으며, 회사는 지체
              없이 답변 및 처리하겠습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제9조 (개인정보 열람청구)
            </h2>
            <p className="mb-3 leading-relaxed text-navy-700">
              정보주체는 「개인정보 보호법」 제35조에 따른 개인정보의 열람을
              아래의 연락처로 청구할 수 있습니다.
            </p>
            <ul className="list-disc space-y-1 pl-5 leading-relaxed text-navy-700">
              <li>담당자 : 개인정보 보호책임자</li>
              <li>이메일 : bereajin@gmail.com</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제10조 (권익침해 구제방법)
            </h2>
            <p className="mb-3 leading-relaxed text-navy-700">
              정보주체는 개인정보 침해에 대한 신고나 상담이 필요한 경우 아래
              기관에 문의할 수 있습니다.
            </p>
            <ul className="list-disc space-y-1 pl-5 leading-relaxed text-navy-700">
              <li>
                개인정보분쟁조정위원회 : 1833-6972 (
                <a
                  href="https://www.kopico.go.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-dark underline"
                >
                  www.kopico.go.kr
                </a>
                )
              </li>
              <li>개인정보침해신고센터 : 118 (privacy.kisa.or.kr)</li>
              <li>
                대검찰청 : 1301 (
                <a
                  href="https://www.spo.go.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-dark underline"
                >
                  www.spo.go.kr
                </a>
                )
              </li>
              <li>경찰청 : 182 (ecrm.police.go.kr)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-navy-900 sm:text-xl">
              제11조 (개인정보처리방침의 변경)
            </h2>
            <p className="leading-relaxed text-navy-700">
              이 개인정보처리방침은 2026년 7월 1일부터 시행합니다.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
