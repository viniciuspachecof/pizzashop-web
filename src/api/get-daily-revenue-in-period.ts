import { api } from '@/lib/axios';

export interface GetDailyRevenueInPeriuodQuery {
  from?: Date;
  to?: Date;
}

export type GetDailyRevenueInPeriodResponse = {
  date: string;
  receipt: number;
}[];

export async function getDailyRevenueInPeriod({ from, to }: GetDailyRevenueInPeriuodQuery) {
  const response = await api.get<GetDailyRevenueInPeriodResponse>('/metrics/daily-receipt-in-period', {
    params: {
      from,
      to,
    },
  });

  return response.data;
}
