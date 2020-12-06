import bem from 'bem-ts';
import React from 'react';
import { useState } from 'react';
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
  const [countryName, setCountryName] = useState(props.match.params.name || '');
  const countriesMap = useRecoilValue(countryState);
  const countryData = countriesMap.get(countryName);

  if (!countryData) {
    throw Error('Country data not found.');
  }

  const { name, alpha3Code, region, currencies, timezones, population, flag } = countryData;

  const onClickForward = (isForward: boolean) => {
    const dataArray = Array.from(countriesMap.values());
    const currentIndex = dataArray.indexOf(countryData);
    const len = dataArray.length;
    const targetIndex = isForward ? (currentIndex + 1) % len : (currentIndex + len - 1) % len;
    const targetCountry = dataArray[targetIndex];
    setCountryName(targetCountry.name);
  };

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
          <h1>{`${name} [${alpha3Code}]`}</h1>
          <div className={b('flagContainer')}>
            <button
              type="button"
              className={b('button')}
              onClick={() => {
                onClickForward(false);
              }}
            >
              {'<'}
            </button>
            <img className={b('flag')} src={flag} alt="country flag"></img>
            <button
              type="button"
              className={b('button')}
              onClick={() => {
                onClickForward(true);
              }}
            >
              {'>'}
            </button>
          </div>
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
              <strong>Population</strong> : {population.toLocaleString()}
            </p>
          </div>
          <CovidTable countryISO2={countryData.alpha2Code} />
        </div>
      </ContentLayout>
      <br />
      <footer>
        ข้อมูลจาก <code>CORONAVIRUS COVID19 API</code>
      </footer>
    </div>
  );
}

export default withRouter(CountryPage);
