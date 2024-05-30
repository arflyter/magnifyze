'use client';
import React, { useState } from 'react';
import { Container } from '@/components/Container';

interface Trade {
  pair: string;
  quantity: number;
  enteredPrice: number;
  currentPrice?: number; // Optional for active trades
  closedPrice?: number; // Optional for history trades
  profitLoss: number; // In percentage
  id: string;
  date: string; // Added date field
}

const rsiTrades: Trade[] = [
  { pair: "BTC/USDT", quantity: 1, enteredPrice: 60000, currentPrice: 63000, profitLoss: 5, id: 'btc-usdt-1', date: '2023-01-01' },
  { pair: "ETH/USDT", quantity: 2, enteredPrice: 3000, currentPrice: 2900, profitLoss: -3.33, id: 'eth-usdt-1', date: '2023-01-02' },
  // Add more trades as needed, up to 5
];

const fibonacciTrades: Trade[] = [
  { pair: "ADA/USDT", quantity: 500, enteredPrice: 1.2, currentPrice: 1.3, profitLoss: 8.33, id: 'ada-usdt-1', date: '2023-01-03' },
  // Add more trades as needed, up to 5
];

const smartGridTrades: Trade[] = [
  { pair: "KSM/USDT", quantity: 200, enteredPrice: 30, currentPrice: 33, profitLoss: 10, id: 'ksm-usdt-1', date: '2023-01-04' },
];

const historyTrades: Trade[] = [
  { pair: "BTC/USDT", quantity: 1, enteredPrice: 60000, closedPrice: 63000, profitLoss: 5, id: 'btc-usdt-2', date: '2023-01-05' },
  { pair: "ETH/USDT", quantity: 2, enteredPrice: 3000, closedPrice: 2900, profitLoss: -3.33, id: 'eth-usdt-2', date: '2023-01-06' },
  { pair: "ADA/USDT", quantity: 500, enteredPrice: 1.2, closedPrice: 1.3, profitLoss: 8.33, id: 'ada-usdt-2', date: '2023-01-07' },
  { pair: "KSM/USDT", quantity: 200, enteredPrice: 30, closedPrice: 33, profitLoss: 10, id: 'ksm-usdt-2', date: '2023-01-08' },
  // Add more history trades as needed
];

const ActiveTrades: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'history'>('active');
  const [historyDisplayCount, setHistoryDisplayCount] = useState<number>(10);

  const handleStopTrade = (tradeId: string) => {
    alert(`Stopping trade ${tradeId}`);
    // Implement stopping logic here
  };

  const renderTradesTable = (trades: Trade[], showStopButton: boolean, isHistory: boolean) => (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trading Pair</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Entered Price</th>
            {isHistory ? (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Closed Price</th>
            ) : (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Price</th>
            )}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profit/Loss (%)</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount ($)</th>
            {showStopButton && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {trades.map((trade) => {
            const price = isHistory ? trade.closedPrice! : trade.currentPrice!;
            const totalAmount = trade.quantity * price;

            return (
              <tr key={trade.id}>
                <td className="px-6 py-4 whitespace-nowrap">{trade.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{trade.pair}</td>
                <td className="px-6 py-4 whitespace-nowrap">{trade.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">${trade.enteredPrice.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">${price.toFixed(2)}</td>
                <td className={`px-6 py-4 whitespace-nowrap ${trade.profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>{trade.profitLoss.toFixed(2)}%</td>
                <td className="px-6 py-4 whitespace-nowrap">${totalAmount.toFixed(2)}</td>
                {showStopButton && (
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button onClick={() => handleStopTrade(trade.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                      Stop Trade
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  return (
    <Container>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setActiveTab('active')}
          className={`mr-4 px-4 py-2 rounded-full ${activeTab === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Active Trades
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`px-4 py-2 rounded-full ${activeTab === 'history' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          History
        </button>
      </div>
      {activeTab === 'active' && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">RSI Bot</h2>
          {renderTradesTable(rsiTrades.slice(0, 5), true, false)}
          <h2 className="text-lg font-semibold mt-6">Fibonacci Bot</h2>
          {renderTradesTable(fibonacciTrades.slice(0, 5), true, false)}
          <h2 className="text-lg font-semibold mt-6">Smart Grid Bot</h2>
          {renderTradesTable(smartGridTrades.slice(0, 1), true, false)}
        </div>
      )}
      {activeTab === 'history' && (
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Trade History</h2>
            <select
              className="block w-40 p-2 border border-gray-300 rounded-md"
              value={historyDisplayCount}
              onChange={(e) => setHistoryDisplayCount(Number(e.target.value))}
            >
              {[10, 20, 50, 100, 200, 500].map((count) => (
                <option key={count} value={count}>
                  Show {count}
                </option>
              ))}
            </select>
          </div>
          {renderTradesTable(historyTrades.slice(0, historyDisplayCount), false, true)}
        </div>
      )}
    </Container>
  );
};

export default ActiveTrades;
