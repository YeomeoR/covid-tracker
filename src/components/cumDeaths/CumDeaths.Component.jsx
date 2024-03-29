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
      .then(
            (res) => {
                 let result = res.data.data.reverse();

                 // looping through the data-response and creating a dataObj variable in the process
                 for (const dataObj of result)  {
    cumDeathsRate.push(parseInt(dataObj.cumDeaths28DaysByPublishDateRate));
    cumDate.push(parseInt(dataObj.date));
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
    <div className="charts" id='cumDeaths' style={{ height: 700, width: 900 }}>
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
                  display: false,

                  autoSkip: true,
                  padding: 10,
                  // this section didn't make the difference expected of it. reversing the console.log() did, though!!
                  // ticks: {
                  //   // reverse: true,
                  //   maxTicksLimit: 7,
                  //   display: false,
                  // },
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default CumDeathsRate;
