import React from 'react';
import { Link, Route } from 'react-router-dom';
import { GetLink } from '../helper';
import { Routes } from '../Route';

export interface CountryFlagProps {
  name: string;
  imgUrl: string;
  width: number;
  height: number;
}

function CountryFlag(props: CountryFlagProps) {
  const { name, imgUrl, width, height } = props;

  return (
    <Link to={GetLink(Routes.CountryData, name)} target="_blank">
      <div>
        <img src={imgUrl} width={width + 'px'} height={height + 'px'} alt="country flag"></img>
        <p>{name}</p>
      </div>
    </Link>
  );
}

export default CountryFlag;
