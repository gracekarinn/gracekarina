import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Grace's Portfolio",
  description: "Grace is a Computer Science student in University of Indonesia",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={'${inter.className} bg-gray-50 text-gray-950 relative h-[1000px] pt-28 sm:scroll-pt-36'}>
        <div className='bg-[#fee2e2] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#f0fdf4] absolute top-[-1rem] -z-10 left-[50rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
      <ActiveSectionContextProvider>
        <Header />
        {children}
        <Footer />
      </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
