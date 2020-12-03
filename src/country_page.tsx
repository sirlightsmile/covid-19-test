import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
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
      <h1>Country Data of {countryData.name}</h1>
      {Object.entries(countryData).map(([keys, value]) => (
        <p>
          {keys} : {value.toString()}
        </p>
      ))}
    </div>
  ) : (
    <div>No data.</div>
  );
}

export default withRouter(CountryPage);
