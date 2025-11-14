import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useSelector } from 'react-redux'

const BarChart = ({payed,pending}) => {
    const { isDark } = useSelector((state) => state.theme)

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const textColor = isDark ? 'rgb(226 232 240)' : 'rgb(30 41 59)';

    ChartJS.defaults.color = textColor;

    const options = {
         responsive: true,
      maintainAspectRatio: false,
      resizeDelay: 200,
        plugins: {
            legend: {
                position: 'top',
                labels: { color: textColor }
            },
            title: {
                display: true,
                text: 'Monthly Bookings and Checked-In',
                color: textColor
            },
        },
        scales: {
            x: { ticks: { color: textColor } },
            y: { ticks: { color: textColor } }
        }
    }

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',"Aug","Sep","Oct","Nov","Dec"];

    const data = {
        labels,
        datasets: [
            {
                label: "Payed",
                data: payed,
                borderColor: 'rgb(66 42 251)',
                backgroundColor: 'rgb(66 42 251)',
            },
            {
                label: "Pending",
                data: pending,
                borderColor: 'rgb(86 195 255)',
                backgroundColor: 'rgb(86 195 255)',
            },
        ]
    }

    return (
        
            <Bar options={options} data={data} />
       
    )
}

export default BarChart
