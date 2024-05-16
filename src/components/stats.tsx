import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Container } from '@/components/Container';
import { subDays, format } from 'date-fns';  // Use date-fns for date manipulation

const StatsPage: React.FC = () => {
    const [startDate, setStartDate] = useState(format(subDays(new Date(), 7), 'yyyy-MM-dd'));
    const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'));

    // Simulated daily profit/loss values
    const generateData = () => Array.from({ length: 30 }, (_, index) => ({
        date: format(subDays(new Date(), 30 - index), 'yyyy-MM-dd'),
        profit: Math.floor(Math.random() * 2000 - 1000)
    }));

    const [data, setData] = useState(generateData());

    useEffect(() => {
        // Filter data based on selected date range
        setData(generateData().filter(d => 
            d.date >= startDate && d.date <= endDate
        ));
    }, [startDate, endDate]);

    // Calculate total profit or loss from the filtered data
    const totalProfit = data.reduce((acc, curr) => acc + curr.profit, 0);

    const barData = {
        labels: data.map(d => d.date),
        datasets: [{
            label: 'Daily Profit/Loss',
            data: data.map(d => d.profit),
            backgroundColor: data.map(d => d.profit >= 0 ? 'rgba(75, 192, 192, 0.5)' : 'rgba(255, 99, 132, 0.5)'),
            borderColor: data.map(d => d.profit >= 0 ? 'rgb(75, 192, 192)' : 'rgb(255, 99, 132)'),
            borderWidth: 1,
        }]
    };

    const lineData = {
        labels: data.map(d => d.date),
        datasets: [{
            label: 'Profit Accumulation',
            data: data.map((d, index) => (index > 0 ? data[index - 1].profit + d.profit : d.profit)),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    return (
        <Container className="py-8">
            <h1 className="text-2xl font-bold text-center mb-6">Stats</h1>
            <div className="text-center text-lg mb-4">
                <p>Total Profit/Loss for the Selected Period: ${totalProfit}</p>
            </div>

            <div className="text-center mb-6">
                <label htmlFor="start-date" className="mr-2 font-medium">Start Date:</label>
                <input
                    type="date"
                    id="start-date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                    className="cursor-pointer mr-4"
                />
                <label htmlFor="end-date" className="mr-2 font-medium">End Date:</label>
                <input
                    type="date"
                    id="end-date"
                    value={endDate}
                    onChange={e => setEndDate(e.target.value)}
                    className="cursor-pointer"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div>
                    <h2 className="text-lg font-semibold mb-2">P&L by Day</h2>
                    <Bar data={barData} options={{ indexAxis: 'y' }} />
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-2">Profit Accumulation</h2>
                    <Line data={lineData} />
                </div>
            </div>
        </Container>
    );
};

export default StatsPage;
