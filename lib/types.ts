export type Priority = "높음" | "중간" | "낮음";
export type Status = "미시작" | "진행 중" | "완료" | "확인 필요";
export type Country = "일본" | "미국" | "동남아" | "중국" | "유럽";
export type Channel = "Amazon" | "Qoo10" | "Shopee" | "TikTok Shop" | "Rakuten" | "자사몰" | "총판/유통사";
export type ProductCategory = "스킨케어" | "선케어" | "색조" | "헤어케어" | "바디케어" | "유아/패밀리";
export type Stage = "아직 검토 중" | "제품은 있음" | "서류 준비 중" | "입점 준비 중" | "이미 일부 판매 중";

export interface ChecklistItem {
  id: string;
  title: string;
  description?: string;
  category: string;
  priority: Priority;
  status: Status;
}

export interface GeneratedPlan {
  id: string;
  brandName: string;
  country: Country;
  channel: Channel;
  productCategory: ProductCategory;
  skuCount: number;
  stage: Stage;
  checklist: ChecklistItem[];
  createdAt: string;
}

export interface ConsultationData {
  name: string;
  company: string;
  email: string;
  phone: string;
  painPoint: string;
  timestamp: string;
}
