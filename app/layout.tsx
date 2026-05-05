import type { Metadata } from 'next'
import { Manrope, Sora } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
})

export const metadata: Metadata = {
  title: 'K-Beauty Launch System',
  description: '국가, 채널, SKU를 선택하면 해외 진출 준비를 한 화면에서 정리할 수 있는 K-뷰티 체크리스트 도구입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${manrope.variable} ${sora.variable}`}>{children}</body>
    </html>
  )
}
