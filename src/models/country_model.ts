// - ชื่อประเทศ (name)
// - รูปธง
// - อักษรย่อ (alpha3Code)
// - ภูมิภาค (region)
// - สกุลเงิน (currencies name)
// - โซนเวลา (timezones)

//TODO:
// - จำนวนการติดเชื้อในเดือน มกราคม-พฤษภาคม (รบกวนทำเป็นตาราง)

export interface ICountryData {
  name: string;
  flag: string;
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
  readonly alpha3Code: string;
  readonly region: string;
  readonly currencies: ICurrencyData[];
  readonly timezones: string[];
  readonly population: number;

  constructor(params: ICountryData) {
    this.name = params.name;
    this.flag = params.flag;
    this.alpha3Code = params.alpha3Code;
    this.region = params.region;
    this.currencies = params.currencies;
    this.timezones = params.timezones;
    this.population = params.population;
  }
}
