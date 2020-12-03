import React from 'react';
import FlagContainer from './components/flag_container';
import { CountryData } from './models/country_model';
import { selector, useRecoilValue } from 'recoil';
import { GetAllCountryRequest } from './requests/get_all_country_request';
import './App.scss';

const SELECTED_COUNTRY_NUMBER = 29;
const SELECTED_COUNTRY_POPULATION = 300000;

export const countryState = selector<CountryData[]>({
  key: 'countryState',
  get: async () => {
    try {
      return new GetAllCountryRequest().start();
    } catch (e) {
      throw e;
    }
  },
});

function App() {
  const countriesData = useRecoilValue(countryState);
  let selectedCountry: CountryData[] = [];

  for (const data of countriesData) {
    if (data.population >= SELECTED_COUNTRY_POPULATION) {
      selectedCountry.push(data);
    }

    if (selectedCountry.length === SELECTED_COUNTRY_NUMBER) {
      break;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Country covid-19 data</h1>
      </header>
      <main>
        <h2>Select country to show data</h2>
        <FlagContainer countryDataList={selectedCountry} />
      </main>
    </div>
  );
}

export default App;
