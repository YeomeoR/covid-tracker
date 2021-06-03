import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const CovidCases = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    //set variables to pass in as dynamic data
    let covCase = [];
    let covDate = [];

    // axios get endpoint
    axios
      .get(
        'https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=England;areaType=nation&structure={"date":"date","name":"areaName","code":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}',
      )
      // then we take the response and iterate through the array of objects
      .then((res) => {
        // here we reverse the order that the data comes into the console
        console.log(res.data.data.reverse());

        // looping through the data-response and creating a dataObj variable in the process
        for (const dataObj of res.data.data) {
          // pushing the parsed dataObj and the field required to the empty array (covCase)
          covCase.push(parseInt(dataObj.newCasesByPublishDate));
          // pushing the parsed dataObj and the field required to the empty array (covDate)
          covDate.push(parseInt(dataObj.date));
          // setting the chart data STATE with the chart.js labels and datasets with data: covCase variable
          setChartData({
            // https://www.chartjs.org/docs/latest/getting-started/usage.html for layout requirements
            labels: covDate,
            datasets: [
              {
                label: 'New Covid Cases by Date (England)',
                data: covCase,
                backgroundColor: ['rgba(81, 250, 157, 0.6)'],
                borderWidth: 2,
              },
            ],
          });
        }
      })
      .catch((err) => {
        console.log(err);
      }).catch((err) => {
        console.log(err.message)
      })
    // console.log(covCase, covDate);
  };

  // put function into a useEffect so that it runs just once on render of the page
  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="chart" style={{ height: 400, width: 600 }}>
      <Line
        // passing in the STATE as the data to be rendered
        data={chartData}
        // chart.js options parameters
        options={{
          title: { text: 'Covid Cases', display: true },
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
               
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

export default CovidCases;
