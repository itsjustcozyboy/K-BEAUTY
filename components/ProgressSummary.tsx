'use client';

import { GeneratedPlan } from '@/lib/types';
import { getTopThreeTasks } from '@/lib/generateChecklist';

interface ProgressSummaryProps {
  plan: GeneratedPlan;
}

export function ProgressSummary({ plan }: ProgressSummaryProps) {
  const completedCount = plan.checklist.filter(item => item.status === '완료').length;
  const totalCount = plan.checklist.length;
  const overallProgress = Math.round((completedCount / totalCount) * 100);

  // 카테고리별 진행률 계산
  const categories = Array.from(new Set(plan.checklist.map(item => item.category)));
  const categoryProgress = categories.map(category => {
    const items = plan.checklist.filter(item => item.category === category);
    const completed = items.filter(item => item.status === '완료').length;
    return { category, completed, total: items.length };
  });

  // 상위 3개 업무
  const topThreeTasks = getTopThreeTasks(plan.checklist);

  return (
    <div className="space-y-6">
      {/* 전체 진행률 */}
      <div className="card bg-[linear-gradient(180deg,rgba(17,17,17,0.96),rgba(17,17,17,0.82))] text-white border-white/10">
        <div>
          <h3 className="text-lg font-semibold mb-4">전체 준비 상황</h3>
          <div className="flex items-center gap-6">
            <div className="flex-1">
              <div className="w-full bg-white/15 rounded-full h-3.5 mb-2 overflow-hidden">
                <div
                  className="bg-white h-full transition-all duration-300"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
              <p className="text-sm text-white/75">{completedCount} / {totalCount} 업무 완료</p>
            </div>
            <div className="text-4xl font-semibold tracking-tight">{overallProgress}%</div>
          </div>
        </div>
      </div>

      {/* 가장 먼저 해야 할 일 */}
      <div className="card">
        <h3 className="text-lg font-semibold text-[#111111] mb-4">가장 먼저 해야 할 일</h3>
        <ol className="space-y-3">
          {topThreeTasks.map((task, index) => (
            <li key={task.id} className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-semibold text-sm">
                {index + 1}
              </span>
              <div>
                <p className="font-semibold text-[#111111]">{task.title}</p>
                <p className="text-sm text-black/55">{task.category}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* 카테고리별 진행률 */}
      <div className="card">
        <h3 className="text-lg font-semibold text-[#111111] mb-4">카테고리별 진행률</h3>
        <div className="space-y-3">
          {categoryProgress.map(({ category, completed, total }) => {
            const progress = (completed / total) * 100;
            return (
              <div key={category}>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-semibold text-[#111111]">{category}</p>
                  <p className="text-xs text-black/55">{completed}/{total}</p>
                </div>
                <div className="w-full bg-black/10 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-black h-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 선택 정보 */}
      <div className="card">
        <h3 className="text-lg font-semibold text-[#111111] mb-3">선택 정보</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-black/45 font-semibold mb-1 uppercase tracking-[0.16em]">브랜드명</p>
            <p className="font-semibold text-[#111111]">{plan.brandName}</p>
          </div>
          <div>
            <p className="text-xs text-black/45 font-semibold mb-1 uppercase tracking-[0.16em]">진출 국가</p>
            <p className="font-semibold text-[#111111]">{plan.country}</p>
          </div>
          <div>
            <p className="text-xs text-black/45 font-semibold mb-1 uppercase tracking-[0.16em]">판매 채널</p>
            <p className="font-semibold text-[#111111]">{plan.channel}</p>
          </div>
          <div>
            <p className="text-xs text-black/45 font-semibold mb-1 uppercase tracking-[0.16em]">상품 카테고리</p>
            <p className="font-semibold text-[#111111]">{plan.productCategory}</p>
          </div>
          <div>
            <p className="text-xs text-black/45 font-semibold mb-1 uppercase tracking-[0.16em]">SKU 개수</p>
            <p className="font-semibold text-[#111111]">{plan.skuCount}개</p>
          </div>
          <div>
            <p className="text-xs text-black/45 font-semibold mb-1 uppercase tracking-[0.16em]">준비 단계</p>
            <p className="font-semibold text-[#111111] text-sm">{plan.stage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
