import { http, HttpResponse } from "msw";
import { GetMonthCancelledOrdersAmountResponse } from "../get-month-canceled-orders-amount";

export const getMonthCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCancelledOrdersAmountResponse
>("/metrics/month-canceled-orders-amount", () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 75,
  });
});
