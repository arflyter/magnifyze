'use client';
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Sidenav from '@/components/sidenav'
import Explore from '@/components/explore'
import ActiveTrades from '@/components/ActiveTrades';
import React, { useState } from 'react';



const Home: React.FC = () => {
  const [apiName, setApiName] = useState<string>('demo');

  const handleNewApi = (newApiName: string) => {
    setApiName(newApiName);
  };

  return (
    <>
      <Header apiName={apiName} />
      <Sidenav/>
      <main>
      <Explore/>
      <ActiveTrades/> 
      </main>
      Footer
    </>
  );
};

export default Home;
