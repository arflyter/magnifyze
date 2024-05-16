'use client';
import {Footer} from '@/components/Footer'
import { Header } from '@/components/Header'
import {Faqs} from '@/components/Faqs'
import Sidenav from '@/components/sidenav';

//import Sidenav from '@/components/sidenav'

export default function Home() {
  return (
    <>
      <Header />
     
      <main>
        <Faqs />
        <Sidenav/>
      </main>
      <Footer />
    </>
  )
}
