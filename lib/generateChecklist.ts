import { ChecklistItem, Country, Channel, ProductCategory } from "./types";

const BASE_CHECKLIST_ITEMS: ChecklistItem[] = [
  // 시장·채널 판단
  {
    id: "market-1",
    title: "진출 국가의 주요 뷰티 채널 조사",
    description: "Amazon, 현지 플랫폼, 총판 등 주요 채널의 특성 파악",
    category: "시장·채널 판단",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "market-2",
    title: "경쟁 제품 가격대 확인",
    description: "유사 제품 3~5개의 가격, 리뷰 수, 평점 확인",
    category: "시장·채널 판단",
    priority: "중간",
    status: "미시작",
  },
  {
    id: "market-3",
    title: "첫 진입 채널 1개 선택",
    description: "리스크와 잠재성을 고려하여 전략적 우선순위 결정",
    category: "시장·채널 판단",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "market-4",
    title: "총판/직접입점/자사몰 중 진입 방식 결정",
    description: "각 방식의 장단점과 투자 규모 비교",
    category: "시장·채널 판단",
    priority: "높음",
    status: "미시작",
  },

  // SKU 준비
  {
    id: "sku-1",
    title: "우선 진출 SKU 3~5개 선정",
    description: "시장성, 원가, 제조 리드타임을 고려하여 선정",
    category: "SKU 준비",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "sku-2",
    title: "SKU별 용량, 원가, 공급가 정리",
    description: "전체 공급망 비용 구조 파악",
    category: "SKU 준비",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "sku-3",
    title: "SKU별 전성분표 확보",
    description: "제조사로부터 영문 또는 현지어 전성분표 확보",
    category: "SKU 준비",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "sku-4",
    title: "SKU별 영문 제품명 정리",
    description: "현지 소비자가 이해하기 쉬운 제품명 결정",
    category: "SKU 준비",
    priority: "중간",
    status: "미시작",
  },

  // 규제·인증 확인
  {
    id: "reg-1",
    title: "국가별 화장품 등록 필요 여부 확인",
    description: "해당 국가의 식약처, FDA, NMPA 등에 등록 필요성 파악",
    category: "규제·인증 확인",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "reg-2",
    title: "기능성 표현 가능 여부 확인",
    description: "각 국가의 허용 표현 범위 확인 및 리스크 검토",
    category: "규제·인증 확인",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "reg-3",
    title: "금지 성분 포함 여부 확인",
    description: "각 국가의 금지/제한 성분 체크",
    category: "규제·인증 확인",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "reg-4",
    title: "인증/검사 필요 여부 정리",
    description: "안전성 검사, 동물실험 여부, 특수화장품 분류 확인",
    category: "규제·인증 확인",
    priority: "높음",
    status: "미시작",
  },

  // 라벨링·표현 점검
  {
    id: "label-1",
    title: "현지 언어 라벨 필수 항목 확인",
    description: "사용법, 경고, 전성분 등 각 국가의 필수 표기 항목",
    category: "라벨링·표현 점검",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "label-2",
    title: "효능·효과 표현 리스크 검토",
    description: "현지 규제와 클레임 가능성 검토",
    category: "라벨링·표현 점검",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "label-3",
    title: "사용법, 주의사항 번역",
    description: "정확한 번역 및 현지 소비자 이해도 검증",
    category: "라벨링·표현 점검",
    priority: "중간",
    status: "미시작",
  },
  {
    id: "label-4",
    title: "패키지 수정 필요 여부 확인",
    description: "라벨 추가, 디자인 변경 등 필요사항 정리",
    category: "라벨링·표현 점검",
    priority: "중간",
    status: "미시작",
  },

  // 가격·마진 계산
  {
    id: "price-1",
    title: "해외 판매가 후보 설정",
    description: "경쟁제품과 시장 진입 전략 고려하여 판매가 설정",
    category: "가격·마진 계산",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "price-2",
    title: "플랫폼 수수료 확인",
    description: "Amazon FBA/3PL, Qoo10, Shopee 등 수수료 체크",
    category: "가격·마진 계산",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "price-3",
    title: "국제 물류비 추정",
    description: "항공, 해운, 포워딩 비용 포함",
    category: "가격·마진 계산",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "price-4",
    title: "광고비 반영 후 손익분기 판매량 계산",
    description: "현실적 광고 투자 고려한 BEP 분석",
    category: "가격·마진 계산",
    priority: "중간",
    status: "미시작",
  },

  // 물류·통관 준비
  {
    id: "logistics-1",
    title: "HS Code 확인",
    description: "제품별 정확한 HS Code 분류",
    category: "물류·통관 준비",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "logistics-2",
    title: "포워더/물류사 후보 확인",
    description: "해당 국가 전문 물류사 3~5개 비교견적",
    category: "물류·통관 준비",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "logistics-3",
    title: "통관 필요 서류 정리",
    description: "인보이스, 포킹리스트, COO, 원산지증명 등",
    category: "물류·통관 준비",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "logistics-4",
    title: "반품/파손 대응 방식 정리",
    description: "반품 프로세스 및 비용 부담 정책 결정",
    category: "물류·통관 준비",
    priority: "중간",
    status: "미시작",
  },

  // 채널 입점 준비
  {
    id: "channel-1",
    title: "채널별 입점 조건 확인",
    description: "판매자 요건, 서류, 최소 주문량 등",
    category: "채널 입점 준비",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "channel-2",
    title: "사업자/브랜드 서류 준비",
    description: "사업자등록증, 브랜드 인증서, 위임장 등",
    category: "채널 입점 준비",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "channel-3",
    title: "상품 등록용 이미지 준비",
    description: "고화질 제품 사진 5~10장, 배경 통일",
    category: "채널 입점 준비",
    priority: "높음",
    status: "미시작",
  },
  {
    id: "channel-4",
    title: "상품 상세페이지 구성",
    description: "채널별 포맷에 맞춘 상세페이지 텍스트 및 레이아웃",
    category: "채널 입점 준비",
    priority: "높음",
    status: "미시작",
  },

  // 마케팅·상세페이지 준비
  {
    id: "marketing-1",
    title: "현지 소비자용 핵심 문구 작성",
    description: "USP와 현지 시장 트렌드를 반영한 카피",
    category: "마케팅·상세페이지 준비",
    priority: "중간",
    status: "미시작",
  },
  {
    id: "marketing-2",
    title: "리뷰/사용 후기 자료 정리",
    description: "초기 리뷰 확보 전략 수립",
    category: "마케팅·상세페이지 준비",
    priority: "중간",
    status: "미시작",
  },
  {
    id: "marketing-3",
    title: "전후사진, 임상자료, 인증자료 정리",
    description: "현지 규제 허용 범위 내 마케팅 자료 준비",
    category: "마케팅·상세페이지 준비",
    priority: "중간",
    status: "미시작",
  },
  {
    id: "marketing-4",
    title: "초기 광고 예산 설정",
    description: "런칭 후 1개월 광고 예산 규모 결정",
    category: "마케팅·상세페이지 준비",
    priority: "중간",
    status: "미시작",
  },

  // 운영·리포트 관리
  {
    id: "ops-1",
    title: "주간 진행 상황 업데이트",
    description: "정기적 진행상황 체크리스트 갱신",
    category: "운영·리포트 관리",
    priority: "낮음",
    status: "미시작",
  },
  {
    id: "ops-2",
    title: "SKU별 판매량과 마진 기록",
    description: "주간/월간 영업 현황 추적",
    category: "운영·리포트 관리",
    priority: "낮음",
    status: "미시작",
  },
  {
    id: "ops-3",
    title: "미완료 업무 담당자 지정",
    description: "단계별 담당자 명확화",
    category: "운영·리포트 관리",
    priority: "낮음",
    status: "미시작",
  },
  {
    id: "ops-4",
    title: "다음 액션 아이템 정리",
    description: "매주 우선순위 재정렬",
    category: "운영·리포트 관리",
    priority: "낮음",
    status: "미시작",
  },
];

// 국가·채널 조합별 추가 항목
const additionalItems: Record<string, ChecklistItem[]> = {
  "일본_Qoo10": [
    {
      id: "qoo10-japan-1",
      title: "Qoo10 입점 조건 확인",
      description: "판매자 가입, 수수료, 정산 주기 등",
      category: "채널 입점 준비",
      priority: "높음",
      status: "미시작",
    },
    {
      id: "qoo10-japan-2",
      title: "일본어 상품명/상세페이지 번역",
      description: "자연스러운 일본어 표현",
      category: "라벨링·표현 점검",
      priority: "높음",
      status: "미시작",
    },
    {
      id: "qoo10-japan-3",
      title: "일본 소비자 리뷰 확보 전략 수립",
      description: "초기 리뷰 및 평점 확보 계획",
      category: "마케팅·상세페이지 준비",
      priority: "중간",
      status: "미시작",
    },
    {
      id: "qoo10-japan-4",
      title: "일본 라벨링 필수 항목 점검",
      description: "PMDA 가이드 준수",
      category: "라벨링·표현 점검",
      priority: "높음",
      status: "미시작",
    },
  ],
  "미국_Amazon": [
    {
      id: "amazon-us-1",
      title: "Amazon Seller Central 계정 준비",
      description: "사업자 등록, 은행 계좌, 세금 번호 준비",
      category: "채널 입점 준비",
      priority: "높음",
      status: "미시작",
    },
    {
      id: "amazon-us-2",
      title: "FBA/3PL 비용 비교",
      description: "Amazon FBA vs. 3PL 물류사 비용/서비스 비교",
      category: "가격·마진 계산",
      priority: "높음",
      status: "미시작",
    },
    {
      id: "amazon-us-3",
      title: "효능 표현 클레임 리스크 검토",
      description: "FDA 규제 범위 내 표현 검토",
      category: "라벨링·표현 점검",
      priority: "높음",
      status: "미시작",
    },
    {
      id: "amazon-us-4",
      title: "미국 소비자용 상세페이지 키워드 정리",
      description: "SEO 최적화 검색어 선정",
      category: "마케팅·상세페이지 준비",
      priority: "중간",
      status: "미시작",
    },
  ],
  "동남아_Shopee": [
    {
      id: "shopee-sea-1",
      title: "Shopee 입점 방식 확인",
      description: "판매자 타입, 수수료 정책 선택",
      category: "채널 입점 준비",
      priority: "높음",
      status: "미시작",
    },
    {
      id: "shopee-sea-2",
      title: "국가별 배송비 비교",
      description: "타이, 베트남, 인도네시아 등 배송가 비교",
      category: "물류·통관 준비",
      priority: "높음",
      status: "미시작",
    },
    {
      id: "shopee-sea-3",
      title: "가격 경쟁 SKU 선별",
      description: "가격 민감도 높은 지역 맞춤 가격 전략",
      category: "가격·마진 계산",
      priority: "높음",
      status: "미시작",
    },
    {
      id: "shopee-sea-4",
      title: "TikTok Shop 연계 가능성 검토",
      description: "동남아 라이브커머스 전략 수립",
      category: "마케팅·상세페이지 준비",
      priority: "중간",
      status: "미시작",
    },
  ],
  "중국_": [
    {
      id: "china-1",
      title: "중국 화장품 등록 요건 확인",
      description: "NMPA 등록, 제한/금지 성분 확인",
      category: "규제·인증 확인",
      priority: "높음",
      status: "미시작",
    },
    {
      id: "china-2",
      title: "위생허가/특수화장품 여부 확인",
      description: "기능성 표현 가능 범위 결정",
      category: "규제·인증 확인",
      priority: "높음",
      status: "미시작",
    },
    {
      id: "china-3",
      title: "중국어 라벨링 항목 점검",
      description: "간체자/번체자 선택, 필수 표기 준수",
      category: "라벨링·표현 점검",
      priority: "높음",
      status: "미시작",
    },
    {
      id: "china-4",
      title: "총판/왕홍/플랫폼 전략 비교",
      description: "TMall, Douyin, 총판 진출 방식 검토",
      category: "시장·채널 판단",
      priority: "높음",
      status: "미시작",
    },
  ],
  "유럽_": [
    {
      id: "eu-1",
      title: "CPNP 등록 필요 여부 확인",
      description: "유럽연합 화장품 공식 포털 등록",
      category: "규제·인증 확인",
      priority: "높음",
      status: "미시작",
    },
    {
      id: "eu-2",
      title: "Responsible Person 필요 여부 확인",
      description: "EU 내 RP 기관 확보",
      category: "규제·인증 확인",
      priority: "높음",
      status: "미시작",
    },
    {
      id: "eu-3",
      title: "EU 라벨링 항목 점검",
      description: "INCI 명칭, 경고 문구 등",
      category: "라벨링·표현 점검",
      priority: "높음",
      status: "미시작",
    },
    {
      id: "eu-4",
      title: "안전성 평가 자료 준비",
      description: "Stability, Safety Assessment 자료",
      category: "규제·인증 확인",
      priority: "높음",
      status: "미시작",
    },
  ],
};

export function generateChecklist(formData: {
  brandName: string;
  country: Country;
  channel: Channel;
  productCategory: ProductCategory;
  skuCount: number;
  stage: string;
}): ChecklistItem[] {
  let items = [...BASE_CHECKLIST_ITEMS];

  // 국가별 추가 항목
  const countryKey = formData.country;
  const combinedKey = `${countryKey}_${formData.channel}`;

  // 먼저 국가+채널 조합 체크
  if (additionalItems[combinedKey]) {
    items = [...items, ...additionalItems[combinedKey]];
  } else if (additionalItems[`${countryKey}_`]) {
    // 국가만 있는 조합 체크
    items = [...items, ...additionalItems[`${countryKey}_`]];
  }

  return items;
}

export function getTopThreeTasks(checklist: ChecklistItem[]): ChecklistItem[] {
  // 높은 우선순위 순서로 정렬
  const priorityOrder = { "높음": 0, "중간": 1, "낮음": 2 };
  return checklist
    .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
    .slice(0, 3);
}
