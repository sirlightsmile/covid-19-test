export interface ICountryData {
  name: string;
  flag: string;
  alpha2Code: string;
  alpha3Code: string;
  region: string;
  currencies: ICurrencyData[];
  timezones: string[];
  population: number;
}

export interface ICurrencyData {
  code: string;
  name: string;
  symbol: string;
}

//type guard
export function isCountryData(obj: unknown): obj is ICountryData {
  const data = obj as ICountryData;
  return (
    data !== undefined &&
    data.name !== undefined &&
    data.flag !== undefined &&
    data.alpha2Code !== undefined &&
    data.alpha3Code !== undefined &&
    data.region !== undefined &&
    Array.isArray(data.currencies) &&
    Array.isArray(data.timezones) &&
    data.population !== undefined
  );
}

export class CountryData {
  readonly name: string;
  readonly flag: string;
  readonly alpha2Code: string;
  readonly alpha3Code: string;
  readonly region: string;
  readonly currencies: string[];
  readonly timezones: string[];
  readonly population: number;

  constructor(params: ICountryData) {
    this.name = params.name;
    this.flag = params.flag;
    this.alpha2Code = params.alpha2Code;
    this.alpha3Code = params.alpha3Code;
    this.region = params.region;
    this.currencies = params.currencies.map((o) => o.name);
    this.timezones = params.timezones;
    this.population = params.population;
  }
}
