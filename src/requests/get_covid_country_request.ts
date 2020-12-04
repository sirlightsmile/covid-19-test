import { BaseAPIConfig, ContentType, HttpMethod } from './base_http_request';
import { GenericHTTPRequest } from './generic_http_request';
import { COVID_API_URL } from '../config/config';
import { ICovidCountry, isCovidCountry } from '../models/covid_country_model';

export interface Params {
  countrySlug: string;
  from: string;
  to: string;
}

export class GetCovidCountryRequest extends GenericHTTPRequest<ICovidCountry[]> {
  constructor() {
    const config: BaseAPIConfig = {
      method: HttpMethod.GET,
      contentType: ContentType.JSON,
      baseURL: COVID_API_URL,
      url: `/countries`,
    };
    super(config, isGetCovidCountryRequest);
  }
}

export function isGetCovidCountryRequest(obj: unknown): obj is ICovidCountry[] {
  const result = obj as ICovidCountry[];

  const isArray = Array.isArray(result);
  if (isArray && result.length > 0) {
    return isCovidCountry(result[0]);
  }

  return isArray;
}
