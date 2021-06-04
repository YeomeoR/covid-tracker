import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CovidDeaths = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let covDeath = [];
    let covDate = [];

    //api call
    axios
      .get(
        'https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=England;areaType=nation&structure={"date":"date","name":"areaName","code":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}',
      )
      .then((res) => {
        console.log(res.data.data.reverse());

        // need a for...in loop to push the data into vars that can be placed in table datasets.data
        for (const dataObj of res.data.data) {
          covDeath.push(parseInt(dataObj.newDeaths28DaysByPublishDate));
          covDate.push(parseInt(dataObj.date));
        }
        setChartData({
          // https://www.chartjs.org/docs/latest/getting-started/usage.html for layout requirements
          labels: covDate,
          datasets: [
            {
              label: 'Daily Deaths with 28 days of a positive Covid Test (England)',
              data: covDeath,
              backgroundColor: ['rgba(48, 177, 252, 0.877)'],
              borderWidth: 2,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(covDeath, covDate);
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="charts" id='deaths' style={{ height: 700, width: 900 }}>
      <Line
        //the data is the state
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
                },
              },
            ],
            xAxes: [
              {
                autoSkip: true,
                padding: 10,
                // this section didn't make the difference expected of it. reversing the console.log() did, though!!
                // ticks: {
                //   // reverse: true,
                //   maxTicksLimit: 7,
                //   display: false,
                // },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default CovidDeaths;
