import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface MatchParams {
  name: string;
}

interface CountryPageProps extends RouteComponentProps<MatchParams> {}

function CountryPage(props: CountryPageProps) {
  return <div>Country Data of {props.match.params.name}</div>;
}

export default withRouter(CountryPage);
