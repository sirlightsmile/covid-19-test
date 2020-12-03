import { selector } from 'recoil';
import { CurrencyData, ICountryData } from '../models/country_model';
import { GetAllCountryRequest } from '../requests/get_all_country_request';
import * as _ from 'lodash';

const SELECTED_COUNTRY_NUMBER = 29;
const SELECTED_COUNTRY_POPULATION = 300000;

export const countryState = selector<Map<string, CurrencyData>>({
  key: 'countryState',
  get: async () => {
    try {
      const countriesData = await new GetAllCountryRequest().start();
      const selectedCountry = new Map<string, CurrencyData>();

      let count = 0;
      for (const data of countriesData) {
        if (data.population >= SELECTED_COUNTRY_POPULATION) {
          selectedCountry.set(data.name, new CurrencyData(data));
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
