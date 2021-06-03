import axios from 'axios';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2'

const GlobalCases = () => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        axios
          .get(
            'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={"date":"date","name":"areaName","code":"areaCode","cumDeaths28DaysByPublishDateRate":"cumDeaths28DaysByPublishDateRate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}',
          )
          .then((res) => {
            console.log(res.data);
          });
    }
    useEffect(() => {
        chart()
    },[])
    return (
        <div className="pie" style={{ height: 400 }}>
            <Pie
            data={chartData}
            />
        </div>
     );
}
 
export default GlobalCases;