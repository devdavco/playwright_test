import {test,expect}  from '@playwright/test';


test("Login test", async ({ page }) =>{

    await page.goto('https://crm-matosso.leonardojose.dev/login');
    await page.locator('#email').fill("nodo@nodo.com");
    await page.locator('#password').fill("12345678");
    await page.locator('button[type="submit"]').click();
    await expect(page.getByText('Panel de control')).toBeVisible();

    //await expect(page.getByRole('header', { name: 'NT' })).toBeVisible();
    //await page.getByRole('button').click();
    //const locator = page.locator('.text-on-surface');
    //await expect(locator).toContainText('Panel de control');
  //await expect(page.getByRole('heading', { name: 'Panel de control' })).toBeVisible();

});