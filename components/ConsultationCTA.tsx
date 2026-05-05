'use client';

import { useState } from 'react';
import { ConsultationData } from '@/lib/types';

export function ConsultationCTA() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    painPoint: '규제/인증',
  });

  const painPoints = ['규제/인증', '라벨링', '물류/통관', '채널 입점', '가격/마진 계산', '전체 일정 관리'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.company || !formData.email || !formData.phone) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    // localStorage에 저장
    const consultationData: ConsultationData = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    const existingData = JSON.parse(localStorage.getItem('consultations') || '[]');
    existingData.push(consultationData);
    localStorage.setItem('consultations', JSON.stringify(existingData));

    setIsSubmitted(true);
    setTimeout(() => {
      setIsFormOpen(false);
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        painPoint: '규제/인증',
      });
    }, 3000);
  };

  return (
    <section className="section-shell py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-panel rounded-[36px] px-6 py-12 md:px-10 md:py-16 text-center mb-12 md:mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-black/45">Consultation</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-medium tracking-tight text-[#111111] leading-tight">
            체크리스트는 만들었지만,<br />직접 실행할 사람이 부족한가요?
          </h2>
          <p className="mt-5 text-base md:text-lg text-black/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            해외 진출 전문가와의 1:1 상담을 통해 맞춤형 전략을 세워보세요.
            <br />
            당신의 브랜드에게 정말 필요한 것이 무엇인지 진단해드립니다.
          </p>

          {!isFormOpen && (
            <button
              onClick={() => setIsFormOpen(true)}
              className="btn-primary px-8 py-4 text-base md:text-lg"
            >
              SKU별 준비 상태 진단 상담 신청하기
            </button>
          )}
        </div>

        {/* 상담 신청 폼 */}
        {isFormOpen && (
          <div className="max-w-2xl mx-auto">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="card">
                <h3 className="text-2xl font-semibold text-[#111111] mb-6">상담 신청 폼</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#111111] mb-2">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="예: 김미영"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#111111] mb-2">
                      회사명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="예: 뷰티온 코스메틱스"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#111111] mb-2">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="예: kim@beautyon.com"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#111111] mb-2">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="예: 010-1234-5678"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-[#111111] mb-2">
                    가장 막히는 부분은? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="painPoint"
                    value={formData.painPoint}
                    onChange={handleInputChange}
                    className="select-field"
                  >
                    {painPoints.map(point => (
                      <option key={point} value={point}>{point}</option>
                    ))}
                  </select>
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="btn-primary flex-1"
                  >
                    상담 신청하기
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="btn-outline flex-1"
                  >
                    취소
                  </button>
                </div>

                <p className="text-xs text-black/45 text-center mt-4">
                  입력하신 정보는 MVP 데모용으로 로컬 저장소에만 저장됩니다.
                </p>
              </form>
            ) : (
              <div className="card text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-semibold text-[#111111] mb-2">상담 신청이 접수되었습니다!</h3>
                <p className="text-black/60">
                  입력하신 내용은 MVP 데모용으로만 저장됩니다.
                </p>
              </div>
            )}
          </div>
        )}

        {/* 혜택 목록 */}
        {!isFormOpen && (
          <div className="max-w-2xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2 text-[#111111]">레이저포커스</h4>
                <p className="text-sm text-black/55">당신의 브랜드에 정말 필요한 준비만 우선순위 지정</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📅</div>
                <h4 className="font-semibold mb-2 text-[#111111]">실행 일정</h4>
                <p className="text-sm text-black/55">언제까지 무엇을 해야 하는지 명확한 타임라인 수립</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💡</div>
                <h4 className="font-semibold mb-2 text-[#111111]">전문 조언</h4>
                <p className="text-sm text-black/55">수출 규제, 인증, 채널별 진입 전략</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
