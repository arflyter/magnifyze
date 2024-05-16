'use client';
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Sidenav from '@/components/sidenav'
import Explore from '@/components/explore'
import ActiveTrades from '@/components/ActiveTrades';

export default function Home() {
  return (
    <>
      <Header />
      <Sidenav/>
      <main>
      
       <Explore/>
       <ActiveTrades/> 
      </main>
      <Footer />
    </>
  )
}
