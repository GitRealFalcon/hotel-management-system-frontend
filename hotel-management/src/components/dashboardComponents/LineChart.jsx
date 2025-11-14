import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { useSelector } from 'react-redux'


const LineChart = ({cancelled,completed}) => {
    const { isDark } = useSelector((state) => state.theme)
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
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
                label: "Cancelled",
                data: cancelled,
                borderColor: 'rgb(66 42 251)',
                backgroundColor: 'rgb(66 42 251)',
            },
            {
                label: "Completed",
                data: completed,
                borderColor: 'rgb(86 195 255)',
                backgroundColor: 'rgb(86 195 255)',
            },
        ]
    }
    return (
       
            <Line className='w-full h-full' options={options} data={data} />
    
    )
}

export default LineChart
