import {expect, test} from "@playwright/test"
import HomePage from '../Page/HomePage'
import LoginPage from '../Page/LoginPage'

const loginUrl ='https://www.saucedemo.com'
const HomeUrl ='https://www.saucedemo.com/inventory.html'


fixture('Home Page')
.page(HomeUrl)



test('From - Successfully Login ', async t =>{
  await t
  HomePage.clickOnProduct();
  HomePage.clickOnAddToCartFirstItem();
  HomePage.VerifyPrice();
  HomePage.backbtn();
  HomePage.clickOnAddToCartSecondItem();
  HomePage.clickOnGoToCart();
  expect(HomePage.VerifyPrice()).toEqual('$44.90'); 
  HomePage.clickOnBackToShoping();
  HomePage.clickOnAddToCartSecondItem();
  HomePage.clickOnGoToCart(); 
 
}
)

