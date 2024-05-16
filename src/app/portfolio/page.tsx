'use client';
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Sidenav from '@/components/sidenav'
import PortfolioPage from '@/components/portfolio';

export default function Home() {
  return (
    <>
      <Header />
      <Sidenav/>
      <main>
      
       <PortfolioPage/>
        
      </main>
      <Footer />
    </>
  )
}
