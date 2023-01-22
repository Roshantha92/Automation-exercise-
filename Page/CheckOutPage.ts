import { faker } from "@faker-js/faker";
import { expect, Page } from "@playwright/test";
import { Selector, t } from "testcafe";
export default class CartPage{
    static RandomUserName() {
        throw new Error("Method not implemented.");
    }
    static RandomLastName() {
        throw new Error("Method not implemented.");
    }
    static RandomZipCode() {
        throw new Error("Method not implemented.");
    }
    static ContinueButton() {
        throw new Error("Method not implemented.");
    }
    RandomUserName: any;
    RandomLastName: any;
    RandomZipCode: any;
    ContinueButton: any;
    FirstnameInput: any;
    LastnameInput: any;
    ZipCode: any;
    FinishButton: any;
    static clickOnCheckout: any;

    constructor(public page : Page){

        this.RandomUserName = faker.name.firstName();
        this.RandomLastName = faker.name.lastName(); 
        this.RandomZipCode = faker.address.zipCode();
        this.ContinueButton = Selector('input[id=continue]');
        this.FirstnameInput = Selector('input[id=first-name]');
        this.LastnameInput = Selector('input[id=last-name]');
        this.ZipCode = Selector('input[id=postal-code]');
        

    }

  
    async setFirstName (RandomUserName: string){
        await this.page.type(this.FirstnameInput,RandomUserName)
    }

    async setLasttName (RandomLastName: string){
        await this.page.type(this.LastnameInput,RandomLastName)
    }

    async setZipCode (RandomZipCode: string){
        await this.page.type(this.ZipCode,RandomZipCode)
    }

    async clickOnContinue(){
        await this.page.click("input[id=continue]");
    }

    async clickOnFinish(){
        await this.page.click("button[id=finish]");
    }
    
    

    


}