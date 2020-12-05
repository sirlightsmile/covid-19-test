import React from 'react';
import FlagContainer from './components/flag_container';
import { useRecoilValue } from 'recoil';
import { countryState } from './recoil/country_recoils';
import bem from 'bem-ts';
import Header from './components/header';
import ContentLayout from './components/content_layout';

const b = bem('App');

function App() {
  const countriesMap = useRecoilValue(countryState);

  return (
    <div className={b()}>
      <Header>
        <h1>Country COVID-19 Data</h1>
      </Header>
      <ContentLayout title="Select Country">
        <FlagContainer countryDataList={Array.from(countriesMap.values())} />
      </ContentLayout>
    </div>
  );
}

export default App;
