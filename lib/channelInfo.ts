export interface ChannelInfo {
  name: string;
  displayName: string;
  description: string;
  characteristics: string[];
  pros: string[];
  cons: string[];
  targetRegions: string[];
  externalLink: string;
  externalLinkLabel: string;
}

export const channelDatabase: Record<string, ChannelInfo> = {
  amazon: {
    name: 'Amazon',
    displayName: 'Amazon',
    description: '미국, 유럽, 일본 등 글로벌 최대 전자상거래 플랫폼. B2C 판매의 표준.',
    characteristics: [
      'FBA (Fulfillment by Amazon) 또는 3PL 물류 옵션 제공',
      '높은 수수료 (FBA 15~45% 범위) 하지만 높은 신뢰도',
      'A9 검색 알고리즘 기반 상품 발견',
      '리뷰와 평점이 판매에 매우 중요',
      'Sponsored Products 광고 필수 투자',
    ],
    pros: [
      '글로벌 트래픽과 신뢰도가 높음',
      'FBA를 통한 쉬운 물류 관리',
      '결제 시스템 안전성 우수',
      '반품 및 분쟁 해결 체계 잘 구성',
    ],
    cons: [
      '높은 수수료와 광고비 필요',
      '초기 리뷰 확보 어려움',
      '경쟁이 매우 심함',
      '셀러 계정 정지 리스크',
    ],
    targetRegions: ['미국', '유럽', '일본', '캐나다', '호주'],
    externalLink: 'https://sellercentral.amazon.com',
    externalLinkLabel: 'Amazon Seller Central',
  },
  qoo10: {
    name: 'Qoo10',
    displayName: 'Qoo10',
    description: '일본 최대 종합 쇼핑몰. 쿠팡과 유사하며 일본 소비자에게 매우 인기.',
    characteristics: [
      '일본 재배치 센터 사용으로 빠른 배송',
      '판매수수료 3~5% + 배송료',
      '일본어 상세페이지 필수',
      '모바일 중심 쇼핑 문화',
      '정기적인 대형 세일 이벤트',
    ],
    pros: [
      '일본 최대 고트래픽 플랫폼',
      '합리적인 수수료 수준',
      '한국 셀러에게 진입 용이',
      '배송 인프라 우수',
    ],
    cons: [
      '일본어 번역/관리 필요',
      '경쟁 제품이 많음',
      '정산 주기가 느린 편',
      '이메일 고객응대 필수',
    ],
    targetRegions: ['일본'],
    externalLink: 'https://qoo10.jp',
    externalLinkLabel: 'Qoo10 공식 사이트',
  },
  shopee: {
    name: 'Shopee',
    displayName: 'Shopee',
    description: '동남아 최대 전자상거래 플랫폼. 싱가포르, 태국, 베트남, 인도네시아 등 6개국 운영.',
    characteristics: [
      '국가별 세금과 규제가 상이',
      '수수료 5~12% (국가별 다름)',
      '동남아에서 가장 큰 트래픽',
      '라이브 쇼핑과 인플루언서 마케팅 활성',
      '가격 경쟁이 심한 시장',
    ],
    pros: [
      '동남아 최대 트래픽',
      '라이브 커머스 기회',
      '신흥 시장 진출 용이',
      '배송 네트워크 확장 중',
    ],
    cons: [
      '국가별 규제 요건 다름',
      '국가별 언어와 통화 관리 필수',
      '환율 변동 위험',
      '반품율이 높은 편',
    ],
    targetRegions: ['태국', '베트남', '인도네시아', '필리핀', '싱가포르', '말레이시아'],
    externalLink: 'https://shopee.com',
    externalLinkLabel: 'Shopee 공식 사이트',
  },
  tiktokshop: {
    name: 'TikTok Shop',
    displayName: 'TikTok Shop',
    description: '틱톡의 라이브 커머스 플랫폼. 동남아와 일본에서 빠르게 성장 중.',
    characteristics: [
      '라이브 쇼핑 중심 플랫폼',
      '짧은 동영상 콘텐츠 활용',
      '크리에이터/인플루언서와 협력',
      '젊은 세대 타겟 (MZ세대)',
      '빠르게 성장하는 채널',
    ],
    pros: [
      '바이럴 마케팅 기회',
      '젊은 고객층 확보',
      '라이브 커머스 트렌드 선점',
      '신규 셀러 유리한 조건',
    ],
    cons: [
      '아직 규제 체계 미정립',
      '예측 불가능한 알고리즘',
      '콘텐츠 제작 비용 필요',
      '정산 체계가 복잡한 편',
    ],
    targetRegions: ['동남아 (태국, 베트남 등)', '일본'],
    externalLink: 'https://www.tiktokshop.com',
    externalLinkLabel: 'TikTok Shop 공식 사이트',
  },
  rakuten: {
    name: 'Rakuten',
    displayName: '라쿠텐 (Rakuten)',
    description: '일본 최대 온라인 몰. Amazon Japan과 함께 일본 EC 시장 양대산맥.',
    characteristics: [
      '일본 소비자 신뢰도가 높음',
      '포인트 제도 (Rakuten Point)',
      '수수료 2~10% (카테고리별)',
      'SEO 친화적인 구조',
      '일본 법인이나 대리인 필요 가능',
    ],
    pros: [
      '일본 소비자의 높은 신뢰도',
      'Amazon Japan보다 수수료 낮음',
      '포인트 제도로 반복 구매 증가',
      '안정적인 판매량',
    ],
    cons: [
      '진입 허들이 높은 편 (심사 엄격)',
      '일본 법인/대리인 필요할 수 있음',
      '월 고정 수수료 있을 수 있음',
      '상세페이지 작성이 복잡',
    ],
    targetRegions: ['일본'],
    externalLink: 'https://www.rakuten.co.jp',
    externalLinkLabel: '라쿠텐 공식 사이트',
  },
};

export function getChannelInfo(channelName: string): ChannelInfo | null {
  const key = channelName.toLowerCase().replace(/\s+/g, '');
  return channelDatabase[key] || null;
}

export const allChannelsList = Object.values(channelDatabase).map(ch => ch.displayName);
