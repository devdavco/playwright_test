import test, { expect } from "@playwright/test";
import RegistroPage from "./pages/Registro";


let registroPage;

test.describe("Pruebas de Registro e2e", () => {


  test.beforeEach( async ({ page }) => {

    registroPage = new RegistroPage(page)


  });

  test('Registro con datos válidos', async ({ page }) =>{

    await registroPage.registrar('Juan Corrales', 'email@juan.com', '12345678', '12345678');

    await expect(page.getByText('Logout', { exact: true })).toHaveText('Logout');
  
  
  });

  //   test('Registro con password diferente', async ({ page }) =>{


  // });

  //   test('Registro con password inválido', async ({ page }) =>{


  // });

});