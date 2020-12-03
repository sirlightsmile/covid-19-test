import { selector } from 'recoil';
import { CountryData } from '../models/country_model';
import { GetAllCountryRequest } from '../requests/get_all_country_request';
import * as _ from 'lodash';

const SELECTED_COUNTRY_NUMBER = 29;
const SELECTED_COUNTRY_POPULATION = 300000;

export const countryState = selector<Map<string, CountryData>>({
  key: 'countryState',
  get: async () => {
    try {
      const countriesData = await new GetAllCountryRequest().start();
      const selectedCountry = new Map<string, CountryData>();

      let count = 0;
      for (const data of countriesData) {
        if (data.population >= SELECTED_COUNTRY_POPULATION) {
          selectedCountry.set(data.name, new CountryData(data));
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
