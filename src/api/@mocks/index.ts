import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { getManagedRestaurantMock } from "../account/mocks/get-managed-restaurant-mock";
import { getProfileMock } from "../account/mocks/get-profile-mock";
import { registerRestaurantMock } from "../account/mocks/register-restaurant-mock";
import { updateProfileMock } from "../account/mocks/update-profile-mock";
import { signInMock } from "../auth/mocks/sign-in-mock";
import { getDailyRevenueInPeriodMock } from "../metrics/mocks/get-daily-revenue-in-period-mock";
import { getDayOrdersAmountMock } from "../metrics/mocks/get-day-orders-amount-mock";
import { getMonthCanceledOrdersAmountMock } from "../metrics/mocks/get-month-canceled-orders-amount-mock";
import { getMonthOrdersAmountMock } from "../metrics/mocks/get-month-orders-amount-mock";
import { getMonthRevenueMock } from "../metrics/mocks/get-month-revenue-mock";
import { getPopularProductsMock } from "../metrics/mocks/get-popular-products-mock";
import { approveOrderMock } from "../order/mocks/approve-order-mock";
import { cancelOrderMock } from "../order/mocks/cancel-order-mock";
import { deliverOrderMock } from "../order/mocks/deliver-order-mock";
import { dispatchOrderMock } from "../order/mocks/dispatch-order-mock";
import { getOrderDetailsMock } from "../order/mocks/get-order-details-mock";
import { getOrdersMock } from "../order/mocks/get-orders-mock";

export const worker = setupWorker(
  signInMock,
  //
  getDailyRevenueInPeriodMock,
  getDayOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueMock,
  getPopularProductsMock,
  //
  getManagedRestaurantMock,
  getProfileMock,
  registerRestaurantMock,
  updateProfileMock,
  //
  getOrdersMock,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
