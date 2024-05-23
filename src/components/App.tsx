import React, { useState } from 'react';
import Exchange from '@/components/exchange';
import { Header } from '@/components/Header';

const App: React.FC = () => {
  const [apiName, setApiName] = useState<string>('demo');

  const handleNewApi = (newApiName: string) => {
    setApiName(newApiName);
  };

  return (
    <>
      <Header apiName={apiName} />
      <Exchange onNewApi={handleNewApi} />
    </>
  );
};

export default App;
