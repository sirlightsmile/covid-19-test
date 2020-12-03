import { selector } from 'recoil';
import { CountryData } from '../models/country_model';
import { GetAllCountryRequest } from '../requests/get_all_country_request';

export const countryState = selector<CountryData[]>({
  key: 'countryState',
  get: async () => {
    try {
      return new GetAllCountryRequest().start();
    } catch (e) {
      throw e;
    }
  },
});
