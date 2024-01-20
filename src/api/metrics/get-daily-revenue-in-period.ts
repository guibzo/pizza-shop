import { api } from '@/libs/axios'

export type GetDailyRevenueInPeriodResponse = {
  date: string
  receipt: number
}[]

export type GetDailyRevenueInPeriodQuery = {
  from?: Date
  to?: Date
}

export const getDailyRevenueInPeriod = async ({
  from,
  to,
}: GetDailyRevenueInPeriodQuery) => {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
