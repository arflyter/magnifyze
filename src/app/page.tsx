'use client';
import {Footer} from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

import Sidenav from '@/components/sidenav'

export default function Home() {
  return (
    <>
      <Header />
      <Sidenav/>
      <main>
        <Hero />
        
      </main>
      <Footer />
    </>
  )
}
