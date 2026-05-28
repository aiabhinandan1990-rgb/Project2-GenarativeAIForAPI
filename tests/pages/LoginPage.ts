import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username = 'input[data-test="username"]';
  readonly password = 'input[data-test="password"]';
  readonly loginButton = 'input[data-test="login-button"]';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginButton);
  }
}
