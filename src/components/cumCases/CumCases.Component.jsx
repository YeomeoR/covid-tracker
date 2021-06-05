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
                 let result = res.data.data.reverse();

                 // looping through the data-response and creating a dataObj variable in the process
                 for (const dataObj of result) {
                   cumCases.push(parseInt(dataObj.cumCasesByPublishDate));
                   cumDate.push(parseInt(dataObj.date));
                 }
                setChartData({
                  labels: cumDate,
                  datasets: [
                    {
                      label: 'Cummulative Cases (England)',
                      data: cumCases,
                      backgroundColor: ['#e4ff6b99'],
                      borderWidth: 1,
                    },
                  ],
                  options: {
                    title: { text: 'Cum Cases', display: true },
                    scales: {
                      
                          xAxes: [
                              {
                              display: false,
                            autoSkip: true,
                            padding: 10,
                            
                          },
                        ],
                      
                    },
                  },
                });
            }
        ).catch(err => {
            console.log(err.message)
        });

    }

    useEffect(() => {
        chart()
    },[])

    return (
      <div className="charts" id='cumCases' style={{ height: 700, width: 900 }}>
        <Line
          data={chartData}
          
        />
      </div>
    );
}
 
export default CumCases;