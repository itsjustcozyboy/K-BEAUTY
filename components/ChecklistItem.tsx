'use client';

import { ChecklistItem, Status } from '@/lib/types';

interface ChecklistItemProps {
  item: ChecklistItem;
  onStatusChange: (id: string, status: Status) => void;
  onChannelInfoClick?: (channelName: string) => void;
}

export function ChecklistItemComponent({ item, onStatusChange, onChannelInfoClick }: ChecklistItemProps) {
  const statusOptions: Status[] = ['미시작', '진행 중', '완료', '확인 필요'];

  const statusColors: Record<Status, string> = {
    '미시작': 'bg-gray-100 text-gray-700',
    '진행 중': 'bg-blue-100 text-blue-700',
    '완료': 'bg-green-100 text-green-700',
    '확인 필요': 'bg-orange-100 text-orange-700',
  };

  const priorityColors: Record<string, string> = {
    '높음': 'bg-red-100 text-red-700',
    '중간': 'bg-yellow-100 text-yellow-700',
    '낮음': 'bg-green-100 text-green-700',
  };

  return (
    <div className="rounded-[22px] border border-black/10 bg-white/70 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(18,18,18,0.08)] backdrop-blur-md">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-semibold text-[#111111] mb-1">{item.title}</h4>
          {item.description && (
            <p className="text-sm text-black/60 mb-2 leading-relaxed">{item.description}</p>
          )}
        </div>
        <div className="ml-4">
          {item.status === '완료' && (
            <div className="text-2xl">✓</div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className={`badge ${priorityColors[item.priority]}`}>
          {item.priority} 우선순위
        </span>

        <select
          value={item.status}
          onChange={(e) => onStatusChange(item.id, e.target.value as Status)}
          className="text-xs border border-black/10 rounded-full px-3 py-1.5 cursor-pointer bg-white/80 hover:border-black/20 focus:border-black/30 focus:outline-none"
        >
          {statusOptions.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>

        <span className={`badge ${statusColors[item.status]}`}>
          {item.status}
        </span>

        {/* 채널 정보 버튼 - 시장·채널 판단 카테고리에서만 표시 */}
        {item.category === '시장·채널 판단' && onChannelInfoClick && (
          <button
            onClick={() => {
              // 제목에서 채널명 추출
              const channels = ['Amazon', 'Qoo10', 'Shopee', 'TikTok Shop', 'Rakuten', '자사몰', '총판/유통사'];
              const foundChannel = channels.find(ch => item.title.includes(ch) || item.description?.includes(ch));
              if (foundChannel) {
                onChannelInfoClick(foundChannel);
              }
            }}
              className="text-xs px-3 py-1.5 bg-black text-white rounded-full hover:bg-black/85 transition-all font-semibold ml-auto flex-shrink-0"
            title="채널 정보 보기"
          >
            📌 채널 정보
          </button>
        )}
      </div>
    </div>
  );
}
