import bem from 'bem-ts';
import React from 'react';
import { Link, Route } from 'react-router-dom';
import { GetLink } from '../helper';
import { Routes } from '../enum/route';

const b = bem('Flag');

export interface CountryFlagProps {
  name: string;
  imgUrl: string;
}

function CountryFlag(props: CountryFlagProps) {
  const { name, imgUrl } = props;

  return (
    <div className={b('imgContainer')}>
      <Link to={GetLink(Routes.CountryData, name)} target="_blank">
        <img src={imgUrl} alt="country flag"></img>
        <p>{name}</p>
      </Link>
    </div>
  );
}

export default CountryFlag;
