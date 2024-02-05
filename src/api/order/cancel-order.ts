import { api } from "@/libs/axios";

export type CancelOrderParams = {
  orderId: string;
};

export const cancelOrder = async ({ orderId }: CancelOrderParams) => {
  await api.patch(`/orders/${orderId}/cancel`);
};
