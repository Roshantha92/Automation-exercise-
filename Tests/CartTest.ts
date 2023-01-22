import {test} from "@playwright/test"
import CartPage from "../Page/CheckOutPage"
import HomePage from  "../Page/HomePage"
import LoginPage from "../Page/LoginPage"


const loginUrl ='https://www.saucedemo.com'
const CartUrl ='https://www.saucedemo.com/cart.html'


fixture('Cart Page')
.page(CartUrl)

  test('From - Successfully Login ', async t =>{
    await t 
    CartPage.clickOnCheckout();
   
  }

  

)
