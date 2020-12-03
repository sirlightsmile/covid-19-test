import { CountryData, isCountryData } from '../models/country_model';
import { ContentType, HttpMethod } from './base_http_request';
import { GenericHTTPRequest } from './generic_http_request';

export class GetAllCountryRequest extends GenericHTTPRequest<CountryData[]> {
  constructor() {
    const config = {
      method: HttpMethod.GET,
      contentType: ContentType.JSON,
      url: '/all',
    };
    super(config, isGetAllCountryRequest);
  }
}

export function isGetAllCountryRequest(obj: unknown): obj is CountryData[] {
  const result = obj as CountryData[];

  const isArray = Array.isArray(result);
  if (isArray && result.length > 0) {
    return isCountryData(result[0]);
  }

  return isArray;
}
