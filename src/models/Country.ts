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
}

export interface CurrencyData {
  code: string;
  name: string;
  symbol: string;
}
