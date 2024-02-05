import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { registerRestaurantMock } from "../account/mocks/register-restaurant-mock";
import { signInMock } from "../auth/mocks/sign-in-mock";
import { getDailyRevenueInPeriodMock } from "../metrics/mocks/get-daily-revenue-in-period-mock";
import { getDayOrdersAmountMock } from "../metrics/mocks/get-day-orders-amount-mock";
import { getMonthCanceledOrdersAmountMock } from "../metrics/mocks/get-month-canceled-orders-amount-mock";
import { getMonthOrdersAmountMock } from "../metrics/mocks/get-month-orders-amount-mock";
import { getMonthRevenueMock } from "../metrics/mocks/get-month-revenue-mock";
import { getPopularProductsMock } from "../metrics/mocks/get-popular-products-mock";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,

  getDailyRevenueInPeriodMock,
  getDayOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueMock,
  getPopularProductsMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
