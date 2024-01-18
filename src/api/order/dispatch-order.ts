import { api } from '@/libs/axios'

type DispatchOrderParams = {
  orderId: string
}

export const dispatchOrder = async ({ orderId }: DispatchOrderParams) => {
  await api.patch(`/orders/${orderId}/dispatch`)
}
