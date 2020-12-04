import { BaseAPIConfig, ContentType, HttpMethod } from './base_http_request';
import { GenericHTTPRequest } from './generic_http_request';
import { COVID_API_URL } from '../config/config';
import { ICovidData, isCovidData } from '../models/covid_data_model';

export interface Params {
  countryName: string;
  from: string;
  to: string;
}

/**
 * Get COVID status from country
 */
export class GetCovidStatusRequests extends GenericHTTPRequest<ICovidData[]> {
  constructor(params: Params) {
    const config: BaseAPIConfig = {
      method: HttpMethod.GET,
      contentType: ContentType.JSON,
      baseURL: COVID_API_URL,
      url: `/country/${params.countryName}/`,
      params: {
        from: params.from,
        to: params.to,
      },
    };
    super(config, isGetAllCountryRequest);
  }
}

export function isGetAllCountryRequest(obj: unknown): obj is ICovidData[] {
  const result = obj as ICovidData[];

  const isArray = Array.isArray(result);
  if (isArray && result.length > 0) {
    return isCovidData(result[0]);
  }

  return isArray;
}
