import { Routes } from './enum/route';

/**
 * Get link with params
 * @param route base routes
 * @param params routes parameter
 */
export function GetLink(route: Routes, ...params: string[]): string {
  return route + params.join('/');
}

/**
 * Get route with params
 * @param route base routes
 * @param params routes parameter
 */
export function GetRoute(route: Routes, ...params: string[]): string {
  return route + ':' + params.join('/:');
}
