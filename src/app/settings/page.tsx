'use client';
import {Footer} from '@/components/Footer'
import { Header } from '@/components/Header'
import AccountSettings from '@/components/settings';

import Sidenav from '@/components/sidenav'

export default function Home() {
  return (
    <>
      <Header />
      <Sidenav/>
      <main>
        <AccountSettings />
        
      </main>
      <Footer />
    </>
  )
}
