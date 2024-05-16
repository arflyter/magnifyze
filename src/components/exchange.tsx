import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';

import logoKraken from '@/images/logos/kraken.svg';
import logoBinance from '@/images/logos/binance.svg';
import logoOKX from '@/images/logos/okx.svg';
import logoBybit from '@/images/logos/bybit.svg';
import logoKucoin from '@/images/logos/kucoin.svg';
import logoBitget from '@/images/logos/bitget.svg';

const exchanges = ['Binance', 'OKX', 'Bybit', 'KuCoin', 'Bitget', 'Kraken'];

const Exchange: React.FC = () => {
    const [apiName, setApiName] = useState<string>('');
    const [selectedExchange, setSelectedExchange] = useState<string>('');
    const [apiKey, setApiKey] = useState<string>('');
    const [apiSecret, setApiSecret] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log({ apiName, selectedExchange, apiKey, apiSecret });
    };

    const handleCancel = () => {
        setSelectedExchange('');
        setApiName('');
        setApiKey('');
        setApiSecret('');
    };

    return (
        <Container className="pb-16 pt-20 text-center lg:pt-16">
            {/* Added Title */}
            <h2 className="text-2xl font-bold text-blue-600 mb-8">Choose your exchange</h2>
            <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="apiName" className="block text-sm font-medium text-gray-700">API Name</label>
                        <input
                            type="text"
                            id="apiName"
                            value={apiName}
                            onChange={(e) => setApiName(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter API Name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="exchange" className="block text-sm font-medium text-gray-700">Exchange</label>
                        <select
                            id="exchange"
                            value={selectedExchange}
                            onChange={(e) => setSelectedExchange(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            required
                        >
                            <option value="">Select an Exchange</option>
                            {exchanges.map(exchange => (
                                <option key={exchange} value={exchange}>{exchange}</option>
                            ))}
                        </select>
                    </div>
                    {selectedExchange && (
                        <>
                            <div>
                                <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700">API Key</label>
                                <input
                                    type="text"
                                    id="apiKey"
                                    value={apiKey}
                                    onChange={(e) => setApiKey(e.target.value)}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter API Key"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="apiSecret" className="block text-sm font-medium text-gray-700">API Secret</label>
                                <input
                                    type="text"
                                    id="apiSecret"
                                    value={apiSecret}
                                    onChange={(e) => setApiSecret(e.target.value)}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    placeholder="Enter API Secret"
                                    required
                                />
                            </div>
                        </>
                    )}
                    <div className="flex justify-end space-x-4">
                        <button type="button" onClick={handleCancel} className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100">Cancel</button>
                        <button type="submit" className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">Submit</button>
                    </div>
                </form>
            </div>
            <div className="mt-16 lg:mt-44">
        
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Binance', logo: logoBinance},
              { name: 'OKX', logo: logoOKX },
              { name: 'Bybit', logo: logoBybit },
            ],
            [
              { name: 'Kucoin', logo: logoKucoin },
              { name: 'Bitget', logo: logoBitget },
              { name: 'Kraken', logo: logoKraken },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
        </Container>
    );
};

export default Exchange;
