import { expect, test }  from '@playwright/test';

test.describe('Prueba Login', () => {

    test("Validacion con datos correcto", async ({ page }) =>{

        //ir al site
        await page.goto("https://ecommerce-js-test.vercel.app/");

        //Seleccionar elemento
        const linkLogin = page.getByRole('link', {name: 'Login' });


        //ejecutar la acción
        await linkLogin.click();

        await page.getByRole('textbox', { name: 'Email Address' }).fill("admin@example.com")
        await page.getByPlaceholder('Enter your password').fill("admin123");

        await page.getByRole('button', { name: 'Sign In' }).click();

        
        
        //validar lo obtenido
        
        await expect(page.getByText('Logout', { exact: true })).toBeVisible();

    });


} );