import bem from 'bem-ts';
import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../enum/route';
import { GetLink } from '../helper';
import { CountryData } from '../models/country_model';

const b = bem('Flag');

export interface FlagContainerProps {
  countryDataList: CountryData[];
}

function FlagContainer(props: FlagContainerProps) {
  const { countryDataList: countryList } = props;
  return (
    <div className={b('container')}>
      {countryList.map((o) => {
        return (
          <div className={b('imgContainer')}>
            <Link to={GetLink(Routes.CountryData, o.name)} target="_blank">
              <img src={o.flag} alt="country flag"></img>
              <p>{o.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default FlagContainer;
