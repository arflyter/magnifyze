'use client';
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Sidenav from '@/components/sidenav'
import StatsPage from '@/components/stats';

export default function Home() {
  return (
    <>
      <Header />
      <Sidenav/>
      <main>
      
       <StatsPage/>
        
      </main>
      <Footer />
    </>
  )
}
