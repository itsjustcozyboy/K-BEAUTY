'use client';

import { ChannelInfo } from '@/lib/channelInfo';
import { useEffect } from 'react';

interface ChannelInfoModalProps {
  channel: ChannelInfo | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ChannelInfoModal({ channel, isOpen, onClose }: ChannelInfoModalProps) {
  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !channel) return null;

  return (
    <>
      {/* 배경 오버레이 */}
      <div
        className="fixed inset-0 bg-black/55 z-40 transition-opacity backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 모달 */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="hero-panel rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* 헤더 */}
          <div className="bg-[linear-gradient(135deg,rgba(17,17,17,0.96),rgba(17,17,17,0.88))] p-6 sticky top-0 flex items-center justify-between rounded-t-[32px]">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-white mb-2">{channel.displayName}</h2>
              <p className="text-white/75">{channel.description}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white text-3xl leading-none ml-4 flex-shrink-0"
            >
              ×
            </button>
          </div>

          {/* 컨텐츠 */}
          <div className="p-6 space-y-6">
            {/* 진출 지역 */}
            <div>
              <h3 className="text-lg font-semibold text-[#111111] mb-3">진출 가능 지역</h3>
              <div className="flex flex-wrap gap-2">
                {channel.targetRegions.map(region => (
                  <span key={region} className="px-4 py-2 bg-black/5 text-black/80 rounded-full text-sm font-semibold">
                    {region}
                  </span>
                ))}
              </div>
            </div>

            {/* 채널 특성 */}
            <div>
              <h3 className="text-lg font-semibold text-[#111111] mb-3">채널 특성</h3>
              <ul className="space-y-2">
                {channel.characteristics.map((char, idx) => (
                  <li key={idx} className="flex gap-3 text-black/70">
                    <span className="text-black/50 font-bold flex-shrink-0">•</span>
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 장점 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[24px] p-4 border border-black/10 bg-white/70">
                <h3 className="font-semibold text-[#111111] mb-3">장점</h3>
                <ul className="space-y-2">
                  {channel.pros.map((pro, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-black/70">
                      <span className="text-black/50 font-bold">+</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 단점 */}
              <div className="rounded-[24px] p-4 border border-black/10 bg-white/70">
                <h3 className="font-semibold text-[#111111] mb-3">단점</h3>
                <ul className="space-y-2">
                  {channel.cons.map((con, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-black/70">
                      <span className="text-black/50 font-bold">-</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 외부 링크 */}
            <div className="rounded-[24px] p-4 border border-black/10 bg-black/[0.03]">
              <p className="text-sm text-black/65 mb-3">공식 사이트 방문:</p>
              <a
                href={channel.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:bg-black/85 transition-all font-semibold"
              >
                {channel.externalLinkLabel}
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* 푸터 */}
          <div className="px-6 py-4 border-t border-black/10 flex justify-end bg-white/70 rounded-b-[32px]">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-black/10 text-[#111111] hover:bg-black/15 transition-colors font-semibold"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
