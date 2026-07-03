import { expect, Page } from "@playwright/test";

export class InventoryPage {
  async addProductsToCart(page: Page) {
    await page.locator("#add-to-cart-sauce-labs-backpack").click();
    await page.locator("#add-to-cart-sauce-labs-bike-light").click();
  }

  async logoutUser(page: Page) {
    await page.locator("#react-burger-menu-btn").click();
    await page.locator("#logout_sidebar_link").click();
  }

  async confirmLogout(page: Page) {
    await expect(page).toHaveURL("https://www.saucedemo.com/");
  }
}
