import React from 'react'
import { connect } from 'react-redux'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';




const mapStateToProps = (state) => {
    return {

    }
}

const CompareChart = (props) => {

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
                text: 'Comparison Bar Chart',
            },
        },
    };


    const data = {
        labels: props.data.labels,
        datasets: [
            {
                label: props.data.country1,
                data: props.data.data1,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: props.data.country2,
                data: props.data.data2,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };


    return (
        <div className='px-5'>
            <Bar options={options} data={data} />
        </div>
    )
}




export default connect(mapStateToProps)(CompareChart)