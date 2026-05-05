'use client';

export function ProblemSection() {
  const problems = [
    {
      title: "수출 준비 업무가 흩어져 있음",
      description: "인증, 라벨링, 물류, 채널 입점... 무엇을 먼저 해야 할지 알 수 없을 정도로 복잡합니다.",
    },
    {
      title: "담당자가 부족하면 업무 누락이 발생",
      description: "수출 담당자가 1명뿐이면 중요한 업무를 놓치기 쉽습니다.",
    },
    {
      title: "국가별 규제가 다르다",
      description: "일본, 미국, 중국... 각 국가마다 필요한 인증과 라벨링이 다릅니다.",
    },
    {
      title: "진행 상황을 공유하기 어렵다",
      description: "대표나 팀원에게 현황을 설득력 있게 보고할 수 없습니다.",
    },
  ];

  return (
    <section className="section-shell py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-black/45">Pain points</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-medium tracking-tight text-[#111111]">중소 K-뷰티 브랜드가 겪는 문제</h2>
          <p className="mt-4 text-base md:text-lg text-black/60 leading-relaxed">수출 준비는 복잡하지만, 실제로는 순서와 우선순위가 더 중요합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-black text-white text-sm font-semibold">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#111111] mb-2">{problem.title}</h3>
                  <p className="text-black/60 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
