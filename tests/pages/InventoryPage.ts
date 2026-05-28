import { Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly appLogo = '.app_logo';
  readonly boltTShirtAdd = 'button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]';
  readonly cartLink = 'a.shopping_cart_link';

  constructor(page: Page) {
    this.page = page;
  }

  async getTitleText() {
    return this.page.locator(this.appLogo).textContent();
  }

  async addBoltTShirtToCart() {
    await this.page.click(this.boltTShirtAdd);
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}
