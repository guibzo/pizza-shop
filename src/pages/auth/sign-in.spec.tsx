import { queryClient } from "@/libs/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { SignIn } from "./sign-in";

describe("SignIn", () => {
  it("should set default email input value if email is present on search params", () => {
    const wrapper = render(<SignIn />, {
      // for providers dependencies (e.g. route provider)
      wrapper: ({ children }) => {
        return (
          <MemoryRouter initialEntries={["/sign-in?email=johndoe@example.com"]}>
            <HelmetProvider>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </HelmetProvider>
          </MemoryRouter>
        );
      },
    });

    const emailInput = wrapper.getByLabelText("Seu e-mail") as HTMLInputElement;

    expect(emailInput.value).toEqual("johndoe@example.com");
  });
});
