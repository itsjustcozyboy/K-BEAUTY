'use client';

import { ChecklistItem, Status } from '@/lib/types';
import { ChecklistItemComponent } from './ChecklistItem';

interface ChecklistCategoryProps {
  category: string;
  items: ChecklistItem[];
  onStatusChange: (id: string, status: Status) => void;
  onChannelInfoClick?: (channelName: string) => void;
}

export function ChecklistCategory({ category, items, onStatusChange, onChannelInfoClick }: ChecklistCategoryProps) {
  const completedCount = items.filter(item => item.status === '완료').length;
  const progress = (completedCount / items.length) * 100;

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[#111111]">{category}</h3>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-black/45">
          {completedCount}/{items.length} 완료
        </span>
      </div>

      {/* 진행률 바 */}
      <div className="w-full bg-black/10 rounded-full h-2 mb-6 overflow-hidden">
        <div
          className="bg-black h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 아이템 목록 */}
      <div className="space-y-3">
        {items.map(item => (
          <ChecklistItemComponent
            key={item.id}
            item={item}
            onStatusChange={onStatusChange}
            onChannelInfoClick={onChannelInfoClick}
          />
        ))}
      </div>
    </div>
  );
}
