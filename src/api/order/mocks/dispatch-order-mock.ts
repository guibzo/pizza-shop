import { HttpResponse, http } from "msw";
import { DispatchOrderParams } from "../dispatch-order";

export const dispatchOrderMock = http.patch<DispatchOrderParams, never, never>(
  "/orders/:orderId/dispatch",
  async ({ params }) => {
    // to simulate an error
    if (params.orderId === "error-order-id") {
      return new HttpResponse(null, { status: 400 });
    }

    return new HttpResponse(null, { status: 204 });
  },
);
