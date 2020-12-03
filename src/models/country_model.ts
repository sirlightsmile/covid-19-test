// - ชื่อประเทศ (name)
// - รูปธง
// - อักษรย่อ (alpha3Code)
// - ภูมิภาค (region)
// - สกุลเงิน (currencies name)
// - โซนเวลา (timezones)

//TODO:
// - จำนวนการติดเชื้อในเดือน มกราคม-พฤษภาคม (รบกวนทำเป็นตาราง)

export interface CountryData {
  name: string;
  flag: string;
  alpha3Code: string;
  region: string;
  currencies: CurrencyData[];
  timezones: string[];
  population: number;
}

export interface CurrencyData {
  code: string;
  name: string;
  symbol: string;
}

//type guard
export function isCountryData(obj: unknown): obj is CountryData {
  const data = obj as CountryData;
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
