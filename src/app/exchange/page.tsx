'use client';
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Sidenav from '@/components/sidenav'
import Exchange from '@/components/exchange'

export default function Home() {
  return (
    <>
      <Header />
      <Sidenav/>
      <main>
      
       <Exchange/>
        
      </main>
      <Footer />
    </>
  )
}
