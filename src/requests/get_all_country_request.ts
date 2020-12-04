import { ICountryData, isCountryData } from '../models/country_model';
import { BaseAPIConfig, ContentType, HttpMethod } from './base_http_request';
import { GenericHTTPRequest } from './generic_http_request';
import { COUNTRY_API_URL } from '../config/config';

type CountryRequiredField = keyof ICountryData;

const requiredField: CountryRequiredField[] = [
  'name',
  'flag',
  'alpha2Code',
  'alpha3Code',
  'region',
  'currencies',
  'timezones',
  'population',
];

const fieldSeparator = ';';

export class GetAllCountryRequest extends GenericHTTPRequest<ICountryData[]> {
  constructor() {
    const config: BaseAPIConfig = {
      method: HttpMethod.GET,
      contentType: ContentType.JSON,
      baseURL: COUNTRY_API_URL,
      url: '/all',
      params: {
        fields: requiredField.join(fieldSeparator),
      },
    };
    super(config, isGetAllCountryRequest);
  }
}

export function isGetAllCountryRequest(obj: unknown): obj is ICountryData[] {
  const result = obj as ICountryData[];

  const isArray = Array.isArray(result);
  if (isArray && result.length > 0) {
    return isCountryData(result[0]);
  }

  return isArray;
}
