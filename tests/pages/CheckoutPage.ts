import { Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstName = 'input[data-test="firstName"]';
  readonly lastName = 'input[data-test="lastName"]';
  readonly postalCode = 'input[data-test="postalCode"]';
  readonly continueButton = 'input[data-test="continue"]';
  readonly finishButton = 'button[data-test="finish"]';
  readonly completeHeader = '.complete-header';

  constructor(page: Page) {
    this.page = page;
  }

  async fillInformation(first: string, last: string, postal: string) {
    await this.page.fill(this.firstName, first);
    await this.page.fill(this.lastName, last);
    await this.page.fill(this.postalCode, postal);
    await this.page.click(this.continueButton);
  }

  async finishCheckout() {
    await this.page.click(this.finishButton);
  }

  async getCompleteHeaderText() {
    return this.page.locator(this.completeHeader).textContent();
  }
}
