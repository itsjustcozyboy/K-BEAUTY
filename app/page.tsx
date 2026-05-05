'use client';

import { useState, useEffect } from 'react';
import { GeneratedPlan, Status } from '@/lib/types';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { ChecklistForm } from '@/components/ChecklistForm';
import { ChecklistDashboard } from '@/components/ChecklistDashboard';
import { ConsultationCTA } from '@/components/ConsultationCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [currentPlan, setCurrentPlan] = useState<GeneratedPlan | null>(null);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // localStorage에서 저장된 plan 불러오기
  useEffect(() => {
    setIsMounted(true);
    const savedPlan = localStorage.getItem('generatedPlan');
    if (savedPlan) {
      try {
        setCurrentPlan(JSON.parse(savedPlan));
      } catch (error) {
        console.error('Failed to parse saved plan:', error);
      }
    }
  }, []);

  const handleGenerateChecklist = (plan: GeneratedPlan) => {
    setCurrentPlan(plan);
    // localStorage에 저장
    localStorage.setItem('generatedPlan', JSON.stringify(plan));
  };

  const closeFormModal = () => setIsFormModalOpen(false);

  const handleStatusChange = (itemId: string, status: Status) => {
    if (!currentPlan) return;

    const updatedChecklist = currentPlan.checklist.map(item =>
      item.id === itemId ? { ...item, status } : item
    );

    const updatedPlan = {
      ...currentPlan,
      checklist: updatedChecklist,
    };

    setCurrentPlan(updatedPlan);
    localStorage.setItem('generatedPlan', JSON.stringify(updatedPlan));
  };

  const handleResetChecklist = () => {
    if (window.confirm('체크리스트를 초기화하시겠습니까? 모든 진행 상황이 삭제됩니다.')) {
      setCurrentPlan(null);
      localStorage.removeItem('generatedPlan');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <main className="min-h-screen text-[#111111]">
      {/* 고정 상단 바 (체크리스트 생성 후) */}
      {currentPlan && (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="font-semibold text-[#111111] text-lg">
                {currentPlan.brandName} - {currentPlan.country} {currentPlan.channel}
              </h1>
              <p className="text-sm text-black/55">
                준비율: {Math.round((currentPlan.checklist.filter(item => item.status === '완료').length / currentPlan.checklist.length) * 100)}%
              </p>
            </div>
            <button
              onClick={handleResetChecklist}
              className="text-sm px-4 py-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors"
            >
              새로 만들기
            </button>
          </div>
        </nav>
      )}

      {/* 메인 콘텐츠 */}
      {!currentPlan ? (
        <>
          <HeroSection />
          <ProblemSection />
          <HowItWorksSection />
          <ChecklistForm onGenerateChecklist={handleGenerateChecklist} />
          <ConsultationCTA />
          <Footer />
        </>
      ) : (
        <>
          <ChecklistDashboard 
            plan={currentPlan} 
            onStatusChange={handleStatusChange}
          />
          <ConsultationCTA />
          <Footer />
        </>
      )}

      {/* 전체화면 모달 폼 */}
      {isFormModalOpen && !currentPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full h-full md:h-auto md:max-w-3xl bg-white overflow-auto p-6 md:rounded-lg md:shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">내 체크리스트 만들기</h2>
              <button
                onClick={closeFormModal}
                className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded"
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            <ChecklistForm
              onGenerateChecklist={(plan) => {
                handleGenerateChecklist(plan);
                closeFormModal();
              }}
              onClose={closeFormModal}
              disableAutoScroll={true}
            />
          </div>
        </div>
      )}
    </main>
  );
}
