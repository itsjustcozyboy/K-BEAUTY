'use client';

import { useState } from 'react';
import { Country, Channel, ProductCategory, Stage, GeneratedPlan } from '@/lib/types';
import { generateChecklist } from '@/lib/generateChecklist';

interface ChecklistFormProps {
  onGenerateChecklist: (plan: GeneratedPlan) => void;
  onClose?: () => void;
  disableAutoScroll?: boolean;
}

export function ChecklistForm({ onGenerateChecklist, onClose, disableAutoScroll }: ChecklistFormProps) {
  const [formData, setFormData] = useState({
    brandName: '',
    country: '일본' as Country,
    channel: 'Amazon' as Channel,
    productCategory: '스킨케어' as ProductCategory,
    skuCount: '3',
    stage: '제품은 있음' as Stage,
  });

  const countries: Country[] = ['일본', '미국', '동남아', '중국', '유럽'];
  const channels: Channel[] = ['Amazon', 'Qoo10', 'Shopee', 'TikTok Shop', 'Rakuten', '자사몰', '총판/유통사'];
  const categories: ProductCategory[] = ['스킨케어', '선케어', '색조', '헤어케어', '바디케어', '유아/패밀리'];
  const stages: Stage[] = ['아직 검토 중', '제품은 있음', '서류 준비 중', '입점 준비 중', '이미 일부 판매 중'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.brandName.trim()) {
      alert('브랜드명을 입력해주세요.');
      return;
    }

    const checklist = generateChecklist({
      brandName: formData.brandName,
      country: formData.country,
      channel: formData.channel,
      productCategory: formData.productCategory,
      skuCount: parseInt(formData.skuCount),
      stage: formData.stage,
    });

    const generatedPlan: GeneratedPlan = {
      id: Date.now().toString(),
      brandName: formData.brandName,
      country: formData.country,
      channel: formData.channel,
      productCategory: formData.productCategory,
      skuCount: parseInt(formData.skuCount),
      stage: formData.stage,
      checklist,
      createdAt: new Date().toISOString(),
    };

    onGenerateChecklist(generatedPlan);

    if (onClose) {
      onClose();
    } else if (!disableAutoScroll) {
      // 대시보드로 스크롤 (기본 동작)
      setTimeout(() => {
        document.getElementById('checklist-dashboard')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <section id="checklist-form" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-2">내 체크리스트 만들기</h2>
        <p className="section-subtitle text-center">5가지 정보를 입력하면 맞춤형 체크리스트가 생성됩니다.</p>

        <form onSubmit={handleSubmit} className="card bg-gradient-to-br from-white to-light-blue">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 브랜드명 */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-navy mb-2">
                브랜드명 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="brandName"
                value={formData.brandName}
                onChange={handleInputChange}
                placeholder="예: 안티에이징 스킨케어"
                className="input-field"
              />
            </div>

            {/* 진출 국가 */}
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                진출 희망 국가 <span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="select-field"
              >
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            {/* 판매 채널 */}
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                판매 희망 채널 <span className="text-red-500">*</span>
              </label>
              <select
                name="channel"
                value={formData.channel}
                onChange={handleInputChange}
                className="select-field"
              >
                {channels.map(channel => (
                  <option key={channel} value={channel}>{channel}</option>
                ))}
              </select>
            </div>

            {/* 상품 카테고리 */}
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                상품 카테고리 <span className="text-red-500">*</span>
              </label>
              <select
                name="productCategory"
                value={formData.productCategory}
                onChange={handleInputChange}
                className="select-field"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* SKU 개수 */}
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                진출 예정 SKU 개수 <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="skuCount"
                value={formData.skuCount}
                onChange={handleInputChange}
                min="1"
                max="50"
                className="input-field"
              />
            </div>

            {/* 현재 준비 단계 */}
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">
                현재 준비 단계 <span className="text-red-500">*</span>
              </label>
              <select
                name="stage"
                value={formData.stage}
                onChange={handleInputChange}
                className="select-field"
              >
                {stages.map(stage => (
                  <option key={stage} value={stage}>{stage}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary w-full mt-8 text-lg"
          >
            내 준비 업무 생성하기
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            💡 팁: 정확한 정보를 입력할수록 더 정확한 체크리스트를 얻을 수 있습니다.
          </p>
        </form>
      </div>
    </section>
  );
}
