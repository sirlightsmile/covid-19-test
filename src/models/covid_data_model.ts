import { MonthList } from '../enum/month';

export interface ICovidData {
  Country: string;
  CountryCode: string;
  Lat: string;
  Lon: string;
  Cases: number;
  Status: string;
  Date: string;
}

export function isCovidData(obj: unknown): obj is ICovidData {
  const data = obj as ICovidData;
  return (
    data.Country !== undefined &&
    data.CountryCode !== undefined &&
    data.Lat !== undefined &&
    data.Lon !== undefined &&
    Number.isFinite(data.Cases) &&
    data.Status !== undefined &&
    data.Date !== undefined
  );
}

export class CovidData {
  readonly country: string;
  readonly cases: Map<MonthList, number>;

  constructor(country: string, caseMap: Map<MonthList, number>) {
    this.country = country;
    this.cases = caseMap;
  }
}
