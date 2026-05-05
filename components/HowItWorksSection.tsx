'use client';

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "정보 입력",
      description: "브랜드명, 진출 국가, 판매 채널, 상품 정보를 입력합니다.",
    },
    {
      number: "2",
      title: "체크리스트 자동 생성",
      description: "선택한 정보에 맞게 필요한 업무가 자동으로 정렬됩니다.",
    },
    {
      number: "3",
      title: "진행 상황 관리",
      description: "각 업무의 상태를 변경하며 진행률을 추적합니다.",
    },
    {
      number: "4",
      title: "위험 알림 확인",
      description: "국가별 규제이슈와 주의사항을 미리 확인합니다.",
    },
  ];

  return (
    <section className="section-shell py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-black/45">Workflow</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-medium tracking-tight text-[#111111]">어떻게 작동하나요?</h2>
          <p className="mt-4 text-base md:text-lg text-black/60 leading-relaxed">입력, 생성, 추적, 점검의 4단계로 복잡한 준비 업무를 단순하게 만듭니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="card relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white text-lg font-semibold">
                {step.number}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#111111]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-black/60">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-3 h-px w-6 bg-black/15" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
