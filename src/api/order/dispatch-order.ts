import { api } from "@/libs/axios";

export type DispatchOrderParams = {
  orderId: string;
};

export const dispatchOrder = async ({ orderId }: DispatchOrderParams) => {
  await api.patch(`/orders/${orderId}/dispatch`);
};
