import Navbar from './components/navbar/Navbar.Component';
import './App.css';
import CovidCases from './components/cases/CovidCases.component';
import CumCases from './components/cumCases/CumCases.Component';
import CumDeathsRate from './components/cumDeaths/CumDeaths.Component';
import CovidDeaths from './components/deaths/CovidDeaths.Component';
// import GlobalCases from './components/globalPie/GlobalPie.Component';
import { ModalComponent } from './components/modal/modal.component'


const App2 = () => {
  return (
    <>
      <div>
        <Navbar style={{ width: '100vw' }} />
      </div>
        <div className="container">
          <div className="charts">
            <h2 className="title">Coronavirus-19 novel-v2. Data Charts</h2>
      <ModalComponent />
            <CovidCases />
          
          <CumCases />
          <CovidDeaths />
          <CumDeathsRate />
          {/* <GlobalCases /> */}
       
        </div>
      </div>
    </>
  );
};

export default App2;
