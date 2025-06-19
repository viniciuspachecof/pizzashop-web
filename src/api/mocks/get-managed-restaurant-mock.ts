import { http, HttpResponse } from 'msw';
import type { GetManagedRestaurantResponse } from '../get-managed-restaurant';

export const getManagedRestaurantMock = http.get<never, never, GetManagedRestaurantResponse>(
  '/managed-restaurant',
  () => {
    return HttpResponse.json({
      name: 'Nome restaurante',
      description: 'Descrição',
      id: 'aleatorio-id',
      createdAt: new Date(),
      updatedAt: null,
      managerId: 'aleatorio-user-id',
    });
  }
);
