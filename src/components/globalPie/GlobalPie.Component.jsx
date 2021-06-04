import axios from 'axios';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2'

const GlobalCases = () => {
    const [chartData, setChartData] = useState({})

  const chart = () => {
    let countryData = []
    // let country = []
        axios
          .get(
            'https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/2021-06-02/2021-06-03',
          )
          .then((res) => {
            console.log(res.data.data);
            // for (const dataObj of res.data.data) {
            //   //////////////////////////////////////////////////////////////
            // }
            setChartData({
              labels: countryData,
              datasets: [
                {
                  label: 'Cummulative Death Rate / 100,000 (England)',
                  data: countryData,
                  backgroundColor: ['rgba(136, 255, 255, 0.986)'],
                  borderWidth: 2,
                },
              ],
            });
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