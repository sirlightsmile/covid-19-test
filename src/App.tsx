import React from 'react';
import FlagContainer from './components/flag_container';
import { useRecoilValue } from 'recoil';
import { countryState } from './recoil/country_recoils';
import bem from 'bem-ts';

const b = bem('App');

function App() {
  const countriesMap = useRecoilValue(countryState);

  return (
    <div className={b()}>
      <header className={b('header')}>
        <div className={b('heroText')}>
          <h1>Country COVID-19 Data</h1>
        </div>
      </header>
      <main>
        <FlagContainer countryDataList={Array.from(countriesMap.values())} />
      </main>
    </div>
  );
}

export default App;
