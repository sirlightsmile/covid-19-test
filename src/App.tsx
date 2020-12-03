import React from 'react';
import './App.scss';
import * as mockData from './data.json';
import { CountryData } from './models/Country';

const SELECTED_COUNTRY_NUMBER = 29;
const SELECTED_COUNTRY_POPULATION = 300000;

function App() {
  //TODO: change to request
  const data = JSON.stringify(mockData);

  const countryData: CountryData[] = Array.from(JSON.parse(data));
  let selectedCountry: CountryData[] = [];

  for (const data of countryData) {
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
      </main>
    </div>
  );
}

export default App;
