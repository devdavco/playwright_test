import test, { expect } from "@playwright/test";
import { request } from "node:http";

test.describe("Validacion de comportamiento del backend", () =>{

  test("Lista de productos vacia", async ( {page} )=>{

    await page.route('**/products', async (route,request) =>{
      route.fulfill(
        {
          body:JSON.stringify([])
        })
    });
    await page.goto('https://e2e-ecommerce-app.vercel.app/');

    await page.getByText('Not products found', { exact: true })
  });

  test("No retorna imagen consulta producto" ,async ({page}) => {
    await page.route('**/product/1', async (route,request) => {
      route.fulfill(
        {
          body:JSON.stringify([{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}])
        });
    });
    await page.goto('https://e2e-ecommerce-app.vercel.app/');
    await page.getByRole('heading', { name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Lapt...' }).click();



  })
});