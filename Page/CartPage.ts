import { expect, Page } from "@playwright/test";
import { t } from "testcafe";
export default class CartPage{
    static clickOnCheckout() {
        throw new Error("Method not implemented.");
    }

    constructor(public page : Page){

    }

  
    async clickOnCheckout(){

        await this.page.click("button[id=checkout]")
    }
    

    


}