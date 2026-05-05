'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 로고 & 설명 */}
          <div>
            <h3 className="text-2xl font-bold text-mint mb-3">Global Launch Checklist</h3>
            <p className="text-gray-300 text-sm">
              K-뷰티 중소 브랜드가 해외 진출을 준비할 때 필요한 모든 것을 한곳에서 관리합니다.
            </p>
          </div>

          {/* 서비스 */}
          <div>
            <h4 className="font-bold mb-4">서비스</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-mint transition">체크리스트 만들기</a></li>
              <li><a href="#" className="hover:text-mint transition">상담 신청</a></li>
              <li><a href="#" className="hover:text-mint transition">가이드 다운로드</a></li>
            </ul>
          </div>

          {/* 정보 */}
          <div>
            <h4 className="font-bold mb-4">정보</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-mint transition">서비스 소개</a></li>
              <li><a href="#" className="hover:text-mint transition">이용약관</a></li>
              <li><a href="#" className="hover:text-mint transition">개인정보처리방침</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-sm text-gray-400">
            <p>
              © {currentYear} Global Launch Checklist. All rights reserved.
            </p>
            <p className="mt-2 text-xs">
              💡 본 서비스는 교육 및 참고 목적입니다. 실제 해외 진출 시 법률 전문가의 상담을 권장합니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
