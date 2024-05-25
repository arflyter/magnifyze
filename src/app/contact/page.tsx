'use client';
import {Footer} from '@/components/Footer'
import { Header } from '@/components/Header'
import Contacts  from '@/components/contact'

import Sidenav from '@/components/sidenav'

export default function Home() {
  return (
    <>
      <Header/>
      
      <Sidenav/>
      <main>
        <Contacts />
        
      </main>
      <Footer />
    </>
  )
}
