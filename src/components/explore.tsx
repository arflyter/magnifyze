'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import logoBot1 from '@/images/bots/bot1.svg';
import logoBot2 from '@/images/bots/bot2.svg';
import logoBot3 from '@/images/bots/bot3.svg';

const bots = [
  {
    name: 'RSI Bot',
    description: 'Utilizes the Relative Strength Index to determine optimal buying and selling points.',
    id: 'rsi-bot',
    icon: logoBot1,
    minAmount: 100,
  },
  {
    name: 'Fibonacci Bot',
    description: 'Leverages Fibonacci retracement levels for strategic trading decisions.',
    id: 'fibonacci-bot',
    icon: logoBot2,
    minAmount: 500,
  },
  {
    name: 'Smart Grid Bot',
    description: 'Operates by creating a grid of buy and sell orders to profit from market fluctuations.',
    id: 'smart-grid-bot',
    icon: logoBot3,
    minAmount: 500,
  },
];

const Explore: React.FC = () => {
  const [selectedBot, setSelectedBot] = useState<string>('');
  const [tradeAmount, setTradeAmount] = useState<number>(0);
  const [availableAmount, setAvailableAmount] = useState<number>(1000); // Example starting amount

  const handleSelectBot = (botId: string) => {
    setSelectedBot(botId);
    setTradeAmount(0); // Reset trade amount when a new bot is selected
  };

  const handleStartTrading = () => {
    const bot = bots.find((bot) => bot.id === selectedBot);
    if (bot) {
      if (tradeAmount < bot.minAmount) {
        alert(`The minimum trading amount for ${bot.name} is $${bot.minAmount}.`);
        return;
      }
      alert(`Starting ${bot.name} with $${tradeAmount}`);
    }
  };

  const getMinAmount = () => {
    const bot = bots.find((bot) => bot.id === selectedBot);
    return bot?.minAmount ?? 100; // Default to 100 if for some reason the bot isn't found
  };

  return (
    <Container>
      <h1 className="text-2xl font-bold text-center">Explore Our Trading Bots</h1>
      <p className="text-center mt-4">Available Balance: ${availableAmount}</p>

      <div className="grid grid-cols-3 gap-4">
        {bots.map((bot) => (
          <div key={bot.id} className="border p-4 rounded-lg shadow-lg m-2 space-y-4">
            <Image src={bot.icon} alt={`${bot.name} Icon`} width={60} height={60} />
            <h2 className="text-center">{bot.name}</h2>
            <p className="text-center">{bot.description}</p>
            <Button onClick={() => handleSelectBot(bot.id)} className="w-full mt-2">
              {selectedBot === bot.id ? 'Selected' : 'Select This Bot'}
            </Button>
            {selectedBot === bot.id && (
              <div className="mt-4">
                <label htmlFor="tradeAmount" className="block text-sm font-medium text-gray-700">
                  Desired Trading Amount
                </label>
                <input
                  type="number"
                  id="tradeAmount"
                  value={tradeAmount}
                  min={getMinAmount()}
                  onChange={(e) => setTradeAmount(Number(e.target.value))}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  placeholder={`Minimum $${getMinAmount()}`}
                />
                {tradeAmount > 0 && tradeAmount < getMinAmount() && (
                  <p className="text-red-500 text-xs mt-2">Minimum amount is ${getMinAmount()}.</p>
                )}
                <Button onClick={handleStartTrading} className="mt-2 w-full">
                  Start Trading
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Explore;
