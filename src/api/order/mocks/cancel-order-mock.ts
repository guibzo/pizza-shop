import { HttpResponse, http } from "msw";
import { CancelOrderParams } from "../cancel-order";

export const cancelOrderMock = http.patch<CancelOrderParams, never, never>(
  "/orders/:orderId/cancel",
  async ({ params }) => {
    // to simulate an error
    if (params.orderId === "error-order-id") {
      return new HttpResponse(null, { status: 400 });
    }

    return new HttpResponse(null, { status: 204 });
  },
);
