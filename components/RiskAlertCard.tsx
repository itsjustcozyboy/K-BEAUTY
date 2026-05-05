'use client';

import { Country } from '@/lib/types';
import { getRiskAlerts } from '@/lib/riskAlerts';

interface RiskAlertCardProps {
  country: Country;
}

export function RiskAlertCard({ country }: RiskAlertCardProps) {
  const alerts = getRiskAlerts(country);

  const severityColors = {
    high: 'border-red-200 bg-red-50',
    medium: 'border-yellow-200 bg-yellow-50',
    low: 'border-green-200 bg-green-50',
  };

  const severityIcons = {
    high: '⚠️',
    medium: '⚡',
    low: 'ℹ️',
  };

  if (alerts.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[#111111] mb-4">위험 알림 - {country}</h3>
      {alerts.map((alert, index) => (
        <div
          key={index}
          className={`card ${severityColors[alert.severity]}`}
        >
          <div className="flex gap-3">
            <span className="flex-shrink-0 text-2xl">{severityIcons[alert.severity]}</span>
            <div className="flex-1">
              <h4 className="font-semibold text-[#111111] mb-2">{alert.title}</h4>
              <p className="text-sm text-black/65 leading-relaxed">{alert.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="p-4 rounded-2xl border border-black/10 bg-white/70 text-sm text-black/70 backdrop-blur-md">
        <strong>팁:</strong> 본 체크리스트는 사전 점검용이며, 실제 수출·인증·통관은 전문가 확인이 필요합니다.
      </div>
    </div>
  );
}
