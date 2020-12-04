import { selectorFamily } from 'recoil';
import * as _ from 'lodash';
import { CovidData } from '../models/covid_data_model';
import { GetCovidStatusRequests } from '../requests/get_covid_status_request';
import { MonthList } from '../config/month';

const FROM_DATE = '2020-01-01T00:00:00Z';
const TO_DATE = '2020-05-31T00:00:00Z';

export const covidState = selectorFamily({
  key: 'covidState',
  get: (country: string) => async () => {
    try {
      const res = await new GetCovidStatusRequests({
        countryName: country,
        from: FROM_DATE,
        to: TO_DATE,
      }).start();

      let covidData;
      if (res && res.length > 0) {
        const caseMap = new Map<MonthList, number>();
        res.forEach((o) => {
          const month = o.Date.getMonth();
          const current = caseMap.get(month) ?? 0;
          caseMap.set(month, current);
        });

        covidData = new CovidData(res[0].Country, caseMap);
      }

      return covidData;
    } catch (e) {
      throw e;
    }
  },
});
