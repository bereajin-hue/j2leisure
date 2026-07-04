import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://j2leisure.agentt.kr';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '제이투레저개발(주) | 관광·레저·유통 End-to-End 파트너',
  description:
    '제이투레저개발(주)은 예약·결제 시스템 구축부터 현장 운영, 판매 대행, 마케팅까지 관광·레저·유통 파트너사를 위한 End-to-End 운영 솔루션을 제공합니다.',
  keywords: [
    '제이투레저개발',
    '관광레저운영대행',
    '입장권발권시스템',
    '유통대행',
    '마케팅컨설팅',
    '캠핑장운영대행',
    '워터파크운영대행',
    '인천e몰',
  ],
  authors: [{ name: '제이투레저개발(주)' }],
  openGraph: {
    title: '제이투레저개발(주) | 관광·레저·유통 End-to-End 파트너',
    description:
      '예약·결제 시스템 구축부터 현장 운영, 판매 대행, 마케팅까지. 관광·레저·유통 파트너를 위한 End-to-End 운영 솔루션.',
    url: siteUrl,
    siteName: '제이투레저개발(주)',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '제이투레저개발(주)',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '제이투레저개발(주) | 관광·레저·유통 End-to-End 파트너',
    description:
      '예약·결제 시스템 구축부터 현장 운영, 판매 대행, 마케팅까지. 관광·레저·유통 파트너를 위한 End-to-End 운영 솔루션.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'naver-site-verification': 'REPLACE_WITH_NAVER_VERIFICATION_CODE',
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-nanum antialiased">{children}</body>
    </html>
  );
}
