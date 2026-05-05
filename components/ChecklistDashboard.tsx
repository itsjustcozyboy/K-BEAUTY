'use client';

import { GeneratedPlan, Status } from '@/lib/types';
import { useState } from 'react';
import { ProgressSummary } from './ProgressSummary';
import { ChecklistCategory } from './ChecklistCategory';
import { RiskAlertCard } from './RiskAlertCard';
import { ChannelInfoModal } from './ChannelInfoModal';
import { getChannelInfo, ChannelInfo } from '@/lib/channelInfo';

interface ChecklistDashboardProps {
  plan: GeneratedPlan;
  onStatusChange: (id: string, status: Status) => void;
}

export function ChecklistDashboard({ plan, onStatusChange }: ChecklistDashboardProps) {
  const [selectedChannelInfo, setSelectedChannelInfo] = useState<ChannelInfo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChannelInfoClick = (channelName: string) => {
    const info = getChannelInfo(channelName);
    if (info) {
      setSelectedChannelInfo(info);
      setIsModalOpen(true);
    }
  };

  // 카테고리별로 그룹핑
  const categories = Array.from(new Set(plan.checklist.map(item => item.category)));
  const groupedItems = categories.map(category => ({
    category,
    items: plan.checklist.filter(item => item.category === category),
  }));

  return (
    <section id="checklist-dashboard" className="section-shell py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-black/45">Dashboard</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-medium tracking-tight text-[#111111]">{plan.brandName} 준비 체크리스트</h2>
          <p className="mt-4 text-base md:text-lg text-black/60 leading-relaxed">진행률, 리스크, 우선순위를 한 화면에서 관리할 수 있습니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* 좌측: 진행률 요약 */}
          <div className="lg:col-span-1">
            <ProgressSummary plan={plan} />
          </div>

          {/* 우측: 체크리스트 항목 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 위험 알림 */}
            <div className="card">
              <RiskAlertCard country={plan.country} />
            </div>

            {/* 카테고리별 체크리스트 */}
            {groupedItems.map(({ category, items }) => (
              <ChecklistCategory
                key={category}
                category={category}
                items={items}
                onStatusChange={onStatusChange}
                onChannelInfoClick={handleChannelInfoClick}
              />
            ))}
          </div>
        </div>

        {/* 사용 안내 */}
        <div className="mt-12 card">
          <h3 className="font-semibold text-[#111111] mb-3">사용 팁</h3>
          <ul className="text-sm text-black/65 space-y-2 leading-relaxed">
            <li>✓ 각 업무의 <strong>상태</strong>를 변경하면 전체 진행률이 자동으로 업데이트됩니다.</li>
            <li>✓ <strong>높음/중간/낮음</strong> 우선순위를 참고하여 업무를 진행하세요.</li>
            <li>✓ 위험 알림을 꼼꼼히 읽고 국가별 규제를 대비하세요.</li>
            <li>✓ <strong>가장 먼저 해야 할 일</strong>부터 시작하는 것을 권장합니다.</li>
            <li>⚠️ 본 체크리스트는 가이드이며, 실제 규제·인증·통관은 전문가 확인이 필요합니다.</li>
          </ul>
        </div>
      </div>

      {/* 채널 정보 모달 */}
      <ChannelInfoModal
        channel={selectedChannelInfo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
