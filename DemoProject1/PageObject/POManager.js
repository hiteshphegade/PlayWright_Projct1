const { LoginPage } = require('../PageObject/LoginPageFunctionality')
const { ProductAddToCartFunctionality } = require('../PageObject/AddToCartFunctionality')


class POManager{
    constructor(page){
        this.page = page;
        this.lp = new LoginPage(this.page);
        this.addToCardObj = new ProductAddToCartFunctionality(this.page);

    }
}

module.exports = {POManager}