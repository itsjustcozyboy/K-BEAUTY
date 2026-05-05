'use client';

export function HeroSection() {
  const handleScrollToForm = () => {
    const formElement = document.getElementById('checklist-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-shell min-h-screen pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(179,110,252,0.22),transparent_70%)] blur-3xl" />
        <div className="absolute top-36 right-[-6rem] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,142,94,0.18),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 left-[-4rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(6,214,160,0.12),transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-black/60 backdrop-blur-md">
            AI-powered launch workflow
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-medium tracking-tight text-[#111111] leading-[0.95]">
            수출 준비를
            <span className="block text-black/65">하나의 화면으로 정리하세요.</span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-black/62 max-w-3xl mx-auto leading-relaxed">
            국가, 채널, SKU를 선택하면 인증·라벨링·통관·물류·입점 준비 업무를
            한 번에 정리한 체크리스트로 바꿔드립니다.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleScrollToForm}
              className="btn-secondary text-base md:text-lg px-8 py-4"
            >
              아래에서 바로 입력하기
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            <div className="hero-panel rounded-[24px] p-6 text-left">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-black/40">01</p>
              <h3 className="mt-3 text-xl font-semibold text-[#111111]">자동 체크리스트</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/60">국가와 채널별로 필요한 업무를 우선순위에 맞춰 정리합니다.</p>
            </div>
            <div className="hero-panel rounded-[24px] p-6 text-left">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-black/40">02</p>
              <h3 className="mt-3 text-xl font-semibold text-[#111111]">진행 상황 관리</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/60">전체 진행률과 카테고리별 상태를 한눈에 볼 수 있습니다.</p>
            </div>
            <div className="hero-panel rounded-[24px] p-6 text-left">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-black/40">03</p>
              <h3 className="mt-3 text-xl font-semibold text-[#111111]">위험 알림</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/60">국가별 규제와 표현 주의사항을 미리 확인할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}