import { Page } from "@playwright/test";
export default class LoginPage{
    static clickOnLoginButton() {
        throw new Error("Method not implemented.");
    }
    static setPassword(arg0: string) {
        throw new Error("Method not implemented.");
    }
    static setUserNamen(arg0: string) {
        throw new Error("Method not implemented.");
    }

    constructor(public page : Page){

    }

    async enterUserName(username: string){
    await this.page.locator("input[name=user-name][type=text]")
    .type(username)
    }

    async enterPassword(password: string){
    await this.page.locator("input[name=password][type=password]")
    .type(password)
            }

            async ClickLoginButton(){
                await this.page.click("input[id=login-button]")
              
                        }       
}