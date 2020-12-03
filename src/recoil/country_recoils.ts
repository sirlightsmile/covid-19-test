import { selector } from 'recoil';
import { CountryData } from '../models/country_model';
import { GetAllCountryRequest } from '../requests/get_all_country_request';

const SELECTED_COUNTRY_NUMBER = 29;
const SELECTED_COUNTRY_POPULATION = 300000;

export const countryState = selector<Record<string, CountryData>>({
  key: 'countryState',
  get: async () => {
    try {
      const countriesData = await new GetAllCountryRequest().start();
      const selectedCountry: Record<string, CountryData> = {};

      let count = 0;
      for (const data of countriesData) {
        if (data.population >= SELECTED_COUNTRY_POPULATION) {
          selectedCountry[data.name] = data;
          count++;
        }

        if (count === SELECTED_COUNTRY_NUMBER) {
          break;
        }
      }

      return selectedCountry;
    } catch (e) {
      throw e;
    }
  },
});
