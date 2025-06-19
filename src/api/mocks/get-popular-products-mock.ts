import { http, HttpResponse } from 'msw';
import type { GetPopularProductsResponse } from '../get-popular-products';

export const getPopularProductsMock = http.get<never, never, GetPopularProductsResponse>(
  '/metrics/popular-products',
  () => {
    return HttpResponse.json([
      { product: 'Piza 01', amount: 5 },
      { product: 'Piza 02', amount: 3 },
      { product: 'Piza 03', amount: 2 },
      { product: 'Piza 04', amount: 7 },
      { product: 'Piza 05', amount: 4 },
    ]);
  }
);
