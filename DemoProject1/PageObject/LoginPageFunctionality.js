const { expect} = require('@playwright/test')

class LoginPage{
    constructor(page){
        this.page = page;
        this.loginButtonOnHomePage = page.locator('[id="login2"]');
        this.userNameInputBox = page.locator('#loginusername');
        this.passwordInputBox = page.locator('input[id="loginpassword"]');
        this.loginButton = page.locator('//button[normalize-space()="Log in"]');
        this.logOutButton = page.locator('[id="logout2"]');

    }

    async LoginPageFunctionality(userName, password) {
        await this.page.goto("https://demoblaze.com/");
        await this.loginButtonOnHomePage.click();
        await this.userNameInputBox.fill(userName);
        await this.passwordInputBox.fill(password);
        await this.loginButton.click();
       
      }

}
module.exports = {LoginPage}