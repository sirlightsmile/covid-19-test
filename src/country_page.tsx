import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import CovidTable from './components/covid_table';
import { countryState } from './recoil/country_recoils';

export interface MatchParams {
  name: string;
}

const Separator = ', ';

interface CountryPageProps extends RouteComponentProps<MatchParams> {}

function CountryPage(props: CountryPageProps) {
  const countriesMap = useRecoilValue(countryState);
  const countryName = props.match.params.name;
  const countryData = countriesMap.get(countryName);

  if (!countryData) {
    throw Error('Country data not found.');
  }

  const { name, alpha3Code, region, currencies, timezones, population, flag } = countryData;

  return (
    <div>
      <header>
        <h1>บริษัท การีนา ออนไลน์ (ประเทศไทย) จำกัด</h1>
        <h2>89 อาคารเอไอเอ แคปปิตอล เซ็นเตอร์ ชั้น 24 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง กทม. 10400</h2>
      </header>
      <main>
        <h3>{`${name} (${alpha3Code})`}</h3>
        <img src={flag} width={200 + 'px'} height={200 + 'px'} alt="country flag"></img>
        <p>region : {region}</p>
        <p>currencies : {currencies.join(Separator)}</p>
        <p>timezones : {timezones.join(Separator)}</p>
        <p>population : {population}</p>
        <CovidTable countryISO2={countryData.alpha2Code} />
      </main>
      <br />
      <footer>ข้อมูลด้านบนเป็นข้อมูลปัจจุบันจาก xxx</footer>
    </div>
  );
}

export default withRouter(CountryPage);
