import { Page, expect } from "@playwright/test";

export class LoginPage {
  async open(page: Page) {
    await page.goto("https://saucedemo.com/");
  }

  async login(page: Page, username: string, password: string) {
    await page.fill("#user-name", username);
    await page.fill("#password", password);
    await page.locator("#login-button").click();
  }

  async verifyLoginSuccess(page: Page) {
    await expect(page).toHaveURL(/inventory/);
  }

  async verifyLoginError(page: Page) {
    await expect(page.locator("[data-test='error']")).toBeVisible();
  }
}
