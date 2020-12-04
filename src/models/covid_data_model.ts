//TODO:
// - จำนวนการติดเชื้อในเดือน มกราคม-พฤษภาคม (รบกวนทำเป็นตาราง)

export interface ICovidData {
  Country: string;
  CountryCode: string;
  Lat: string;
  Lon: string;
  Cases: number;
  Status: string;
  Date: Date;
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
    data.Date !== undefined &&
    data.Date instanceof Date
  );
}

export class CovidData {
  readonly country: string;
  readonly cases: number;
  readonly date: Date;

  constructor(data: ICovidData) {
    this.country = data.Country;
    this.cases = data.Cases;
    this.date = data.Date;
  }
}
