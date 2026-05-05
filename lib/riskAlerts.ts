import { Country } from "./types";

export interface RiskAlert {
  title: string;
  description: string;
  severity: "high" | "medium" | "low";
}

const riskAlerts: Record<string, RiskAlert[]> = {
  일본: [
    {
      title: "라벨링과 표현 문구 점검이 중요합니다",
      description: "일본의 화장품 법규는 표현 규제가 엄격합니다. 의약외품과 일반 화장품 분류를 명확히 하고, 허용되지 않는 효능 표현은 피해야 합니다.",
      severity: "high",
    },
    {
      title: "Qoo10/Rakuten 진입 전 가격과 리뷰 전략이 필수입니다",
      description: "일본 소비자는 높은 평점과 리뷰에 민감합니다. 초기 리뷰 확보와 합리적인 가격 책정이 성공의 핵심입니다.",
      severity: "high",
    },
    {
      title: "자주 사용되는 트렌드 성분을 반영하세요",
      description: "일본은 화장품 트렌드가 빠릅니다. 현재 인기 있는 성분(비타민C, 나이아신아마이드, 세라마이드 등)을 상세페이지에 강조하면 좋습니다.",
      severity: "medium",
    },
  ],
  미국: [
    {
      title: "Amazon 상세페이지의 효능 표현과 클레임 리스크를 점검하세요",
      description: "미국 FDA는 화장품과 의약품 표현을 엄격히 구분합니다. '치료', '치유', '개선' 등의 표현은 피하고, 사실에 근거한 표현만 사용해야 합니다.",
      severity: "high",
    },
    {
      title: "FBA/3PL 비용을 반영한 마진 계산이 필수입니다",
      description: "Amazon의 FBA 수수료와 3PL 물류사의 보관료가 높습니다. 공급가의 200~300% 수준으로 판매가를 책정해야 합니다.",
      severity: "high",
    },
    {
      title: "초기 광고 투자가 필요합니다",
      description: "미국 Amazon에서 신규 브랜드 제품의 초기 노출을 위해서는 Sponsored Product 광고 투자가 거의 필수입니다.",
      severity: "medium",
    },
  ],
  동남아: [
    {
      title: "가격 경쟁과 물류비를 동시에 고려해야 합니다",
      description: "Shopee와 TikTok Shop은 가격 경쟁이 매우 심합니다. 물류비(특히 반품)를 포함하여 손익분기점을 신중히 계산해야 합니다.",
      severity: "high",
    },
    {
      title: "국가별 등록·통관 요건이 다를 수 있습니다",
      description: "태국, 베트남, 인도네시아, 필리핀 각각 화장품 등록과 통관 요건이 다릅니다. 사전에 정확히 확인해야 반품이나 통관 지연을 피할 수 있습니다.",
      severity: "high",
    },
    {
      title: "라이브 커머스/인플루언서 마케팅이 효과적입니다",
      description: "동남아에서는 라이브 쇼핑과 현지 인플루언서 마케팅의 구매 전환율이 매우 높습니다.",
      severity: "medium",
    },
  ],
  중국: [
    {
      title: "화장품 등록, 위생허가, 동물실험 이슈를 반드시 확인하세요",
      description: "중국의 특수화장품(기능성)은 NMPA 승인이 필수이며, 일부 제품은 여전히 동물실험이 요구됩니다. 진출 전 정확한 요건 파악이 중요합니다.",
      severity: "high",
    },
    {
      title: "현지 플랫폼과 총판 조건을 꼼꼼히 확인하세요",
      description: "Alibaba, TMall, JD.com, Douyin 등 플랫폼마다 조건이 다릅니다. 총판을 통한 진입도 고려하되, 마진율과 배타성 조건을 명확히 해야 합니다.",
      severity: "high",
    },
    {
      title: "중국 소비자의 높은 품질 기대를 대비하세요",
      description: "중국 소비자는 가격 대비 품질과 성능을 엄격하게 평가합니다. 상품이 기대치를 미치지 못하면 매우 부정적인 리뷰를 남길 수 있습니다.",
      severity: "medium",
    },
  ],
  유럽: [
    {
      title: "CPNP 등록, RP, 라벨링, 성분 규정 확인이 필수입니다",
      description: "유럽 화장품 규정(EC 1223/2009)은 복잡합니다. CPNP 포털 등록, Responsible Person 지정, INCI 명칭, 금지 성분 확인 등을 반드시 사전에 진행해야 합니다.",
      severity: "high",
    },
    {
      title: "클레임 표현과 안전성 자료 준비가 중요합니다",
      description: "유럽 소비자와 규제 기관은 제품 클레임에 대해 과학적 근거를 요구합니다. Stability test, Safety assessement 등 완벽한 자료 준비가 필요합니다.",
      severity: "high",
    },
    {
      title: "영국 진출 시 별도의 규청이 필요합니다",
      description: "Brexit 이후 영국은 별도의 규정 체계를 가져갔습니다. 영국 판매 계획이 있다면 OPSS 규정을 별도로 확인해야 합니다.",
      severity: "medium",
    },
  ],
};

export function getRiskAlerts(country: Country): RiskAlert[] {
  return riskAlerts[country] || [];
}

export function getRiskSummary(country: Country): string {
  const countryAlerts: Record<string, string> = {
    일본: "라벨링과 표현, 리뷰 전략",
    미국: "클레임 리스크, FBA 비용",
    동남아: "가격 경쟁, 국가별 규제",
    중국: "규제 등록, 현지 조건",
    유럽: "CPNP, RP, RP, 성분 규정",
  };
  return countryAlerts[country] || "해외 진출 제한사항 검토 필요";
}
