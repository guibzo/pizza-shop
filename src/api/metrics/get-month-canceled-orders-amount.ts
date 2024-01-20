import { api } from '@/libs/axios'

export type GetMonthCancelledOrdersAmountResponse = {
  amount: number
  diffFromLastMonth: number
}

export const getMonthCancelledOrdersAmount = async () => {
  const response = await api.get<GetMonthCancelledOrdersAmountResponse>(
    '/metrics/month-canceled-orders-amount',
  )

  return response.data
}
