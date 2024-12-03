import React from 'react';
import { Chart, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { BarElement } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, BarElement, Title, Tooltip, Legend);

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
);

interface MACDProps {
    labels: string[]; // X-axis labels (e.g., dates)
    macdLine: number[]; // MACD Line values
    signalLine: number[]; // Signal Line values
    histogram: number[]; // Histogram values
}

const MACDChart: React.FC<MACDProps> = ({ labels, macdLine, signalLine, histogram }) => {
    const data = {
        labels,
        datasets: [
            {
                type: 'line' as const,
                label: 'MACD Line',
                data: macdLine,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                type: 'line'  as const,
                label: 'Signal Line',
                data: signalLine,
                borderColor: 'rgba(255,99,132,1)',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderWidth: 2,
                tension: 0.4,
            },
            {
                type: 'bar' as const,
                label: 'Histogram',
                data: histogram,
                backgroundColor: (context: any) => {
                    const value = context.raw;
                    return value > 0 ? 'rgba(0, 200, 0, 0.5)' : 'rgba(200, 0, 0, 0.5)';
                },
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'MACD Chart',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Chart data={data} options={options} type={'line'} />;
};

export default MACDChart;
