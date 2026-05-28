import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';

const VALID_USER = 'standard_user';
const PASSWORD = 'secret_sauce';

test.describe('Sauce Demo - Smoke (POM)', () => {
  test('Test 1 - login and verify Swag Labs title', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);

    await login.goto();
    await login.login(VALID_USER, PASSWORD);

    await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
  });

  test('Test 2 - add Bolt T-Shirt to cart and finish checkout', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.goto();
    await login.login(VALID_USER, PASSWORD);

    await inventory.addBoltTShirtToCart();
    await inventory.goToCart();

    await cart.clickCheckout();
    await checkout.fillInformation('John', 'Doe', '12345');
    await checkout.finishCheckout();

    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });
});
