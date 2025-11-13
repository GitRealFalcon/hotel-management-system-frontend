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

const LineChart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
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
                text: 'Chart.js Line Chart',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: ["40", "45", "10", "75", "42", "26", "77"],
                borderColor: 'rgb(66 42 251)',
                backgroundColor: 'rgb(66 42 251)',
            },
            {
                label: "Dataset 2",
                data: ["55", "20", "47", "22", "67", "54", "32"],
                borderColor: 'rgb(86 195 255)',
                backgroundColor: 'rgb(86 195 255)',
            },
        ]
    }
    return (
        <div>
            <Line className='w-full h-full' options={options} data={data} />
        </div>
    )
}

export default LineChart
