export interface ICovidCountry {
  Country: string;
  Slug: string;
  ISO2: string;
}

export function isCovidCountry(obj: unknown): obj is ICovidCountry {
  const data = obj as ICovidCountry;
  return data.Country !== undefined && data.Slug !== undefined && data.ISO2 !== undefined;
}
