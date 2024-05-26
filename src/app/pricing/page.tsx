'use client';
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Sidenav from '@/components/sidenav'
import Pricing from '@/components/Pricing';

export default function Home() {
  return (
    <>
      <Header />
      <Sidenav/>
      <main>
      
       <Pricing/>
     
      </main>
      <Footer />
    </>
  )
}
