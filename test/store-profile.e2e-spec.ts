import { expect, test } from "@playwright/test";

test("update profile successfully", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Pizza Shop" }).click();
  await page.getByRole("menuitem", { name: "Perfil da Loja" }).click();

  await page.getByLabel("Nome").fill("Bozo Pizzaria");
  await page.getByLabel("Descrição").fill("Another description");

  await page.getByRole("button", { name: "Salvar" }).click();
  await page.waitForLoadState("networkidle"); // to wait http request above

  const toast = page.getByText("Perfil atualizado com sucesso!");

  expect(toast).toBeVisible();

  expect(page.getByRole("button", { name: "Bozo Pizzaria" })).toBeVisible();
});
