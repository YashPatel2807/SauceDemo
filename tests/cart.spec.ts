import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../utils/testData";
import { InventoryPage } from "../pages/InventoryPage";

const login = new LoginPage();
const inventoary = new InventoryPage();

test("Cart functionality", async ({ page }) => {
  await login.open(page);
  await login.login(page, users.valid_users, users.password);
  await inventoary.addProductsToCart(page);
  await inventoary.verifyBadgeCount(page, "2");
});
