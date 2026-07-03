import { expect, Page } from "@playwright/test";

export class CartPage {
  async verifyProducts(
    page: Page,
    products: string[],
    shouldExist: boolean = true,
  ) {
    for (const product of products) {
      if (shouldExist) {
        await expect(page.getByText(product)).toBeVisible();
      } else {
        await expect(page.getByText(product)).toHaveCount(0);
      }
    }
  }

  async removeProducts(page: Page, product: string) {
    await page
      .locator(".cart_item")
      .filter({ hasText: product })
      .getByText("Remove")
      .click();
  }
}
