"use client";
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {Box} from "@mui/system";
import {MyButton} from "@/components/MyButton";
import {useSelector} from "react-redux";
import {appSelectors} from "@/store/appSelectors";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

export const ExampleBarChart = () => {
    const chartData = useSelector(appSelectors.chartData);

    return <Box>
        <Bar options={options} data={chartData}/>
    </Box>
}
