import bem from 'bem-ts';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import ContentLayout from './components/content_layout';
import CovidTable from './components/covid_table';
import Header from './components/header';
import { countryState } from './recoil/country_recoils';

const b = bem('Country');

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
    <div className={b()}>
      <Header>
        <h1>
          บริษัท การีนา ออนไลน์
          <br />
          (ประเทศไทย) จำกัด
        </h1>
        <h2>89 อาคารเอไอเอ แคปปิตอล เซ็นเตอร์ ชั้น 24 ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง กทม. 10400</h2>
      </Header>
      <ContentLayout title="COVID-19 Data">
        <div className={b('content')}>
          <h1>{`${name} (${alpha3Code})`}</h1>
          <img className={b('flag')} src={flag} width={200 + 'px'} height={200 + 'px'} alt="country flag"></img>
          <div className={b('info')}>
            <p>
              <strong>Region</strong> : {region}
            </p>
            <p>
              <strong>Currencies</strong> : {currencies.join(Separator)}
            </p>
            <p>
              <strong>Time Zones</strong> : {timezones.join(Separator)}
            </p>
            <p>
              <strong>Population</strong> : {population}
            </p>
          </div>
          <CovidTable countryISO2={countryData.alpha2Code} />
        </div>
      </ContentLayout>
      <br />
      <footer>ข้อมูลจาก CORONAVIRUS COVID19 API</footer>
    </div>
  );
}

export default withRouter(CountryPage);
