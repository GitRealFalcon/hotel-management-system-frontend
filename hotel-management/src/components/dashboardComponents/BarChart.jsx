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


const BarChart = () => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Bookings and Cheked-In',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

    const data = {
        labels,
        datasets: [
            {
                label: "Booking",
                data: ["40", "45", "10", "75", "42", "26", "77"],
                borderColor: 'rgb(66 42 251)',
                backgroundColor: 'rgb(66 42 251)',
            },
            {
                label: "Checked-In",
                data: ["55", "20", "47", "22", "67", "54", "32"],
                borderColor: 'rgb(86 195 255)',
                backgroundColor: 'rgb(86 195 255)',
            },
        ]
    }

    return (
        <div>

            <Bar options={options} data={data}/>

        </div>
    )
}

export default BarChart
