import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../utils/testData";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";

const login = new LoginPage();
const inventoary = new InventoryPage();
const cart = new CartPage();

test("Cart functionality", async ({ page }) => {
  await login.open(page);
  await login.login(page, users.valid_users, users.password);
  await inventoary.addProductsToCart(page);
  await inventoary.verifyBadgeCount(page, "2");
  await inventoary.openCart(page);
  await cart.verifyProducts(page, [
    "Sauce Labs Backpack",
    "Sauce Labs Bike Light",
  ]);
  await cart.removeProducts(page, "Sauce Labs Backpack");
  await inventoary.verifyBadgeCount(page, "1");
  await cart.verifyProducts(page, ["Sauce Labs Bike Light"]); //present
  await cart.verifyProducts(page, ["Sauce Labs Backpack"], false); //not present
});
