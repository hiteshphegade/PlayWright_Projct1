

class ProductAddToCartFunctionality{
    constructor(page){
        this.page = page;
        this.productList = page.locator('[class="card-block"] h4 a')
        this.addTocartButton = page.locator('[class="row"] div a');
        this.cartButton = page.locator('[id="cartur"]')
        this.productPrice = page.locator('[class="panel panel-info"] h3')
        this.placeOrderButton = page.locator('[type="button"]')
        this.inputNameForAddress = page.locator('[id="name"]')
        this.inputCountryForAddress = page.locator('[id="country"]')
        this.inputCityForAddress = page.locator('[id="city"]')
        this.inputCardForAddress = page.locator('[id="card"]')
        this.inputMonthForAddress = page.locator('[id="month"]')
        this.inputYearForAddress = page.locator('[id="year"]')
        this.purchseButton = page.locator('[class="btn btn-primary"]')
        this.thankYouPurchaseHeader = page.locator('h2')
        this.OKbutton = page.locator('[class="sa-confirm-button-container"]')

    }


    async addToCartProduct(){
        await this.productList.first().waitFor();
        const count = await this.productList.count();
        for( let i=0; i<count; i++){
            const productTitle = await this.productList.nth(i).textContent();
            const title = productTitle.trim().toLowerCase();
            console.log("The name of Product =", productTitle);
            if(title === "samsung galaxy s7"){
                await this.productList.nth(i).click()
                break;
            }
        }
        
        // await this.page.on('dialog', async dialog =>{
        //     console.log("The message = ", dialog.message());
        //     expect(dialog.message()).toContain('Product added.')
        // })
        await this.addTocartButton.nth(2).click();
        await this.cartButton.click();
        await this.productPrice.waitFor();
        const priceOfProduct = await this.productPrice.textContent();
        if(priceOfProduct ==="800"){
            await this.placeOrderButton.nth(29).click();
        }
        await this.inputNameForAddress.fill("Mohan Pagar");
        await this.inputCountryForAddress.fill("India");
        await this.inputCityForAddress.fill("Mumbai");
        await this.inputCardForAddress.fill("1234987452637485");
        await this.inputMonthForAddress.fill("June")
        await this.inputYearForAddress.fill("2025")
        await this.purchseButton.nth(2).click();
        // await this.thankYouPurchaseHeader.waitFor();
        // let purchaseSuccessfulMessage = await this.thankYouPurchaseHeader.textContent();
        // console.log("Successful Message = ",purchaseSuccessfulMessage);
        
        await this.OKbutton.click();



        
    }




}

module.exports = {ProductAddToCartFunctionality}