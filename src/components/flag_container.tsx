import bem from 'bem-ts';
import React from 'react';
import { CountryData } from '../models/country_model';
import CountryFlag from './country_flag';

const b = bem('Flag');

export interface FlagContainerProps {
  countryDataList: CountryData[];
}

function FlagContainer(props: FlagContainerProps) {
  const { countryDataList: countryList } = props;
  return (
    <div className={b()}>
      <div className={b('bg')}>
        <div className={b('header')}>
          <h2>Select country</h2>
        </div>
        <div className={b('container')}>
          {countryList.map((o) => {
            return <CountryFlag key={o.name} name={o.name} imgUrl={o.flag} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default FlagContainer;
