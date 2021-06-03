import axios from 'axios';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const CumDeathsRate = () => {
  const [chartData, setChartData] = useState({});

    const chart = () => {
        let cumDeathsRate = []
        let cumDate = []
    axios
      .get(
        'https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=England;areaType=nation&structure={"date":"date","name":"areaName","code":"areaCode","cumDeaths28DaysByPublishDateRate":"cumDeaths28DaysByPublishDateRate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}',
      )
      .then((res) => {
          console.log(res.data.data.reverse());

          for (const objData of res.data.data) {
              cumDeathsRate.push(
                parseInt(objData.cumDeaths28DaysByPublishDateRate),
              );
              cumDate.push(parseInt(objData.date))
          }
          
          setChartData({
            labels: cumDate,
            datasets: [
              {
                label: 'Cummulative Death Rate / 100,000 (England)',
                data: cumDeathsRate,
                backgroundColor: ['rgba(136, 255, 255, 0.986)'],
                borderWidth: 2,
              },
            ],
          });


      }).catch((err) => {
          console.log(err.message)
      })
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="charts" style={{ height: 400, width: 600 }}>
      <Line
        data={chartData}
        options={{
          title: {
            text: 'Covid Deaths by Date',
            display: true,
          },

          scales: {
            yAxes: [
              {
                ticks: {
                      beginAtZero: true,
                      crossAlign: 'near',
                    
                },
              },
              ],
              xAxes: [
                  {
                      ticks: {
                          crossAlign: 'near',
                          display: false
                      }
                  }
              ]
          },
        }}
      />
    </div>
  );
};

export default CumDeathsRate;
