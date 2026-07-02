import test from "@playwright/test";
import { LoginPage } from "./../pages/LoginPage";
import { users } from "../utils/testData";

const login = new LoginPage();

test("Valid login", async ({ page }) => {
  await login.open(page);
  await login.login(page, users.valid_users, users.password);
  await login.verifyLoginSuccess(page);
});

test("Invalid login", async ({ page }) => {
  await login.open(page);
  await login.login(page, users.invalid_user, users.password);
  await login.verifyLoginError(page);
});
