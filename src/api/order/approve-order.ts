import { api } from '@/libs/axios'

type ApproveOrderParams = {
  orderId: string
}

export const approveOrder = async ({ orderId }: ApproveOrderParams) => {
  await api.patch(`/orders/${orderId}/approve`)
}
