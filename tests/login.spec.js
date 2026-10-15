import {test, expect} from "@playwright/test";
import LoginPage from "./pages/Login";

let loginPage;

test.describe("Prueba de Login ", () =>{

  test.beforeEach (async ({page}) =>{
    loginPage = new LoginPage(page);


  });


  test('Login con datos válidos', async ({ page }) =>{
  
      await loginPage.loginBotonIniciar( 'admin@example.com', 'admin123' );
  
      await expect(page.getByText('Logout', { exact: true })).toHaveText('Logout');
    
    
    });

});