import test from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";
import { LoginPage } from "../pages/LoginPage";
import { users } from "./../utils/testData";

const login = new LoginPage();
const inventory = new InventoryPage();

test("Logout user", async ({ page }) => {
  await login.open(page);
  await login.login(page, users.valid_users, users.password);
  await inventory.logoutUser(page);
  await inventory.confirmLogout(page);
});
