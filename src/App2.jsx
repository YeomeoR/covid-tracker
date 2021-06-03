

import './App.css';
import CovidCases from './components/cases/CovidCases.component';
import CumCases from './components/cumCases/CumCases.Component';
import CumDeathsRate from './components/cumDeaths/CumDeaths.Component';
import CovidDeaths from './components/deaths/CovidDeaths.Component';

const App2 = () => {


  return (
    <div className='charts'>
          <h2>Covid </h2>
      <CovidCases />
      <CumCases />
      <CovidDeaths />
      <CumDeathsRate />
    </div>
  );
};

export default App2;
