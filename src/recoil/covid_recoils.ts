import { selector, selectorFamily } from 'recoil';
import * as _ from 'lodash';
import { CovidData } from '../models/covid_data_model';
import { GetCovidStatusRequests } from '../requests/get_covid_status_request';
import { MonthList } from '../config/month';
import { GetCovidCountryRequest } from '../requests/get_covid_country_request';

const FROM_DATE = '2020-01-01T00:00:00Z';
const TO_DATE = '2020-05-31T00:00:00Z';

export const covidCountryState = selector({
  key: 'covidCountryState',
  get: async () => {
    try {
      const countryMap = new Map<string, string>();
      const res = await new GetCovidCountryRequest().start();
      for (const country of res) {
        countryMap.set(country.ISO2, country.Slug);
      }
      return countryMap;
    } catch (e) {
      throw e;
    }
  },
});

export const covidState = selectorFamily({
  key: 'covidState',
  get: (countryISO2: string) => async ({ get }) => {
    try {
      const countryState = await get(covidCountryState);
      const slug = countryState.get(countryISO2);

      if (!slug) {
        throw 'NO_SLUG_DATA';
      }

      const res = await new GetCovidStatusRequests({
        countrySlug: slug,
        from: FROM_DATE,
        to: TO_DATE,
      }).start();

      let covidData;
      if (res && res.length > 0) {
        const caseMap = new Map<MonthList, number>();
        res.forEach((o) => {
          const date = new Date(o.Date);
          const month = date.getMonth();
          const current = caseMap.get(month) ?? 0;
          caseMap.set(month, current + o.Cases);
        });

        covidData = new CovidData(res[0].Country, caseMap);
      }

      return covidData;
    } catch (e) {
      throw e;
    }
  },
});
