import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import CovidTable from './components/covid_table';
import { countryState } from './recoil/country_recoils';

export interface MatchParams {
  name: string;
}

interface CountryPageProps extends RouteComponentProps<MatchParams> {}

function CountryPage(props: CountryPageProps) {
  const countriesMap = useRecoilValue(countryState);
  const countryName = props.match.params.name;
  const countryData = countriesMap.get(countryName);

  return countryData ? (
    <div>
      <header>
        บริษัท การีนา ออนไลน์ (ประเทศไทย) จำกัด 89 อาคารเอไอเอ แคปปิตอล เซ็นเตอร์ ชั้น 24 ถนนรัชดาภิเษก แขวงดินแดง
        เขตดินแดง กทม. 10400
      </header>
      <main>
        <h1>Country Data of {countryData.name}</h1>
        {Object.entries(countryData).map(([keys, value]) => (
          <p key={keys}>
            {keys} : {value.toString()}
          </p>
        ))}
        <CovidTable countryISO2={countryData.alpha2Code} />
      </main>
      <footer>ข้อมูลด้านบนเป็นข้อมูลปัจจุบันจาก xxx</footer>
    </div>
  ) : (
    <div>No data.</div>
  );
}

export default withRouter(CountryPage);
