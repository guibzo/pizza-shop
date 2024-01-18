import { api } from '@/libs/axios'

export type GetOrdersQuery = {
  pageIndex?: number | null
}

export type GetOrdersResponse = {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export const getOrders = async ({ pageIndex }: GetOrdersQuery) => {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
    },
  })

  return response.data
}
