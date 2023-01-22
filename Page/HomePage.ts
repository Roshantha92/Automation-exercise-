import { expect, Page } from "@playwright/test";
import { t } from "testcafe";
export default class HomePage{
  static clickOnAddToCartSecondItem() {
    throw new Error("Method not implemented.");
  }
  static clickOnGoToCart() {
    throw new Error("Method not implemented.");
  }
  static clickOnBackToShoping() {
    throw new Error("Method not implemented.");
  }
  static backbtn() {
    throw new Error("Method not implemented.");
  }
  static VerifyPrice() {
    throw new Error("Method not implemented.");
  }
  static clickOnAddToCartFirstItem: any;
  static clickOnProduct() {
    throw new Error("Method not implemented.");
  }

    constructor(public page : Page){

    }

  
            async ClickOnProduct(){
                await this.page.click("a[id=item_5_title_link]")
                        }  
                        
            async VerifyPrice(){
               return this.page.locator("div[class=inventory_details_price]")
   
            }  
            
            
            async clickOnAddToCartFirstItem(){
                await this.page.click("button[id=add-to-cart-sauce-labs-fleece-jacket]")
            }
            
            async clickOnBackToShoping(){
                 await this.page.click("button[id=back-to-products]")
            }

            async clickOnAddToCartSecondItem(){
                await   this.page.click("button[id=add-to-cart-sauce-labs-backpack]")
                
            }

            async clickOnGoToCart(){
                await   this.page.click("a[class=shopping_cart_link]")
            }


}