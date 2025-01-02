const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../PageObject/LoginPageFunctionality')
const { ProductAddToCartFunctionality } = require('../PageObject/AddToCartFunctionality')
const { POManager } = require('../PageObject/POManager')

let userName = "hiteshphegade@hp.com";
let password = "Abcd1234.";


test ('Login Functionality', async ({page})=>{
const lp = new LoginPage(page);
await lp.LoginPageFunctionality(userName, password);
expect(lp.logOutButton).toBeTruthy();
})

test("Add to cart functionality", async ({page}) =>{
    const POM = new POManager(page);
    await POM.lp.LoginPageFunctionality(userName, password);
    await POM.addToCardObj.addToCartProduct();
})