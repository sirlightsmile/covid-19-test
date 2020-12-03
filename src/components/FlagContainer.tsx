import React from 'react';
import { CountryData } from '../models/Country';
import CountryFlag from './CountryFlag';

export interface FlagContainerProps {
  countryDataList: CountryData[];
}

function FlagContainer(props: FlagContainerProps) {
  const { countryDataList: countryList } = props;
  return (
    <div>
      {countryList.map((o) => {
        return <CountryFlag key={o.name} name={o.name} imgUrl={o.flag} width={200} height={150} />;
      })}
    </div>
  );
}

export default FlagContainer;
