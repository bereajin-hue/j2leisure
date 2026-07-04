'use client';

import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactCTA() {
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (!formspreeId) {
      setStatus('error');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="bg-navy-900 px-6 py-20 text-white sm:px-10 sm:py-28"
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

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-xl"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-navy-800">
              이름
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="rounded-lg border border-navy-100 px-4 py-3 text-navy-900 outline-none ring-accent/40 focus:ring-2"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-sm font-medium text-navy-800">
              연락처
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="rounded-lg border border-navy-100 px-4 py-3 text-navy-900 outline-none ring-accent/40 focus:ring-2"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-navy-800">
              문의내용
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="resize-none rounded-lg border border-navy-100 px-4 py-3 text-navy-900 outline-none ring-accent/40 focus:ring-2"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="mt-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
          >
            {status === 'submitting' ? '전송 중...' : '문의 보내기'}
          </button>

          {status === 'success' && (
            <p className="text-sm font-medium text-accent-dark">
              문의가 정상적으로 접수되었습니다. 빠르게 연락드리겠습니다.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm font-medium text-red-600">
              전송에 실패했습니다. 잠시 후 다시 시도해 주세요.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
