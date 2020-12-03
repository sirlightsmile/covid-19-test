import { AxiosError } from 'axios';
import { API_URL } from '../config/config';
import { BaseAPIConfig, BaseHttpRequest } from './base_http_request';

export type ConvertFunction<T> = (jsonObj: any) => jsonObj is T;

export class GenericHTTPRequest<T> extends BaseHttpRequest<T> {
  convertFunc: ConvertFunction<T>;

  constructor(config: BaseAPIConfig, convertFunc: ConvertFunction<T>) {
    config.baseURL = API_URL;
    super(config);
    this.convertFunc = convertFunc;
  }

  protected convert(data: string): T {
    const jsonObj = JSON.parse(data);
    if (this.convertFunc(jsonObj)) {
      return jsonObj as T;
    } else {
      throw 'DATA_CONVERT_FAILED';
    }
  }

  protected errorHandle(err: AxiosError<any>): never {
    throw err;
  }
}
