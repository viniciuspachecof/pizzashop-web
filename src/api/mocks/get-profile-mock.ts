import { http, HttpResponse } from 'msw';
import type { GetProfileResponse } from '../get-profile';

export const getProfileMock = http.get<never, never, GetProfileResponse>('/me', () => {
  return HttpResponse.json({
    id: 'aleatorio-id',
    name: 'Fulano',
    email: 'fulano@example.com',
    phone: '123456789',
    role: 'manager',
    createdAt: new Date(),
    updatedAt: null,
  });
});
