import React from 'react';
import FlagContainer from './components/flag_container';
import { useRecoilValue } from 'recoil';
import { countryState } from './recoil/country_recoils';
import './App.scss';

function App() {
  const countriesMap = useRecoilValue(countryState);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Country covid-19 data</h1>
      </header>
      <main>
        <h2>Select country to show data</h2>
        <FlagContainer countryDataList={Array.from(countriesMap.values())} />
      </main>
    </div>
  );
}

export default App;
