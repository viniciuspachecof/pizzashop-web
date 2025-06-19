import { http, HttpResponse } from 'msw';
import type { GetOrderDetailsParams, GetOrderDetailsResponse } from '../get-order-details';

export const getOrderDetailsMock = http.get<GetOrderDetailsParams, never, GetOrderDetailsResponse>(
  '/orders/:orderId',
  ({ params }) => {
    return HttpResponse.json({
      id: params.orderId,
      customer: {
        name: 'Fulano',
        email: 'fulano@example.com',
        phone: '123456789',
      },
      status: 'pending',
      createdAt: new Date().toISOString(),
      totalInCents: 5000,
      orderItems: [
        {
          id: 'order-item-1',
          priceInCents: 1000,
          product: { name: 'Pizza Marguerita' },
          quantity: 1,
        },
        {
          id: 'order-item-1',
          priceInCents: 2000,
          product: { name: 'Pizza Marguerita' },
          quantity: 2,
        },
      ],
    });
  }
);
