import React from 'react';
import axios from 'axios';
import './App.css';

const api = axios.create({
  url:
    'https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=England;areaType=nation&structure={"date":"date","name":"areaName","code":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}',

  // url: "https://api.nhs.uk/conditions/coronavirus-covid-19?url=yeomeo.dev&modules=false",
});
class App extends React.Component {
  state = {
    covid: [],
    // newCases: [],
  }

  constructor() {
    super();

    
    api
      .get(
        'https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=England;areaType=nation&structure={"date":"date","name":"areaName","code":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}',
      )
      .then((res) => {
        
        
        this.setState({ covid: res.data.data });
        
        
        
      });
    
  
  }

  render() {
    return (
      <>
        <h1>
          Covid Tracker
          {/* <button onClick={api}>Get Covid</button> */}
        </h1>
      </>
    );
  }
}

export default App;
