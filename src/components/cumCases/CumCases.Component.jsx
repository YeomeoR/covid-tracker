import axios from 'axios';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'

const CumCases = () => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        let cumCases = []
        let cumDate = []
        axios.get(
            'https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=England;areaType=nation&structure={"date":"date","name":"areaName","code":"areaCode","cumCasesByPublishDate":"cumCasesByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}',
        ).then(
            (res) => {
                console.log(res.data.data.reverse())
                for (const dataObj of res.data.data) {
                    cumCases.push(parseInt(dataObj.cumCasesByPublishDate));
                    cumDate.push(parseInt(dataObj.date))
                    
                }
                setChartData({
                    labels: cumDate,
                    datasets: [{
                        label: 'Cummulative Cases (England)',
                        data: cumCases,
                        backgroundColor: ['rgba(255,124,107, 0.6)'],
                        borderWidth: 1,
                    }]
                })
            }
        ).catch(err => {
            console.log(err.message)
        });

    }

    useEffect(() => {
        chart()
    },[])

    return (
        <div className='chart' style={{height: 400, width: 600}}>
            <Line
                data={chartData}
                options={{
                    title: { text: 'Cum Cases', display: true },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}
            />
        </div>
     );
}
 
export default CumCases;