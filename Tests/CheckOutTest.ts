import {expect, test} from "@playwright/test"
import CheckOutPage from "../Page/CheckOutPage"
import HomePage from '../Page/HomePage'
import LoginPage from '../Page/LoginPage'

const loginUrl ='https://www.saucedemo.com'
const CheckOutUrl ='https://www.saucedemo.com/checkout-step-one.html'


fixture('CheckOut Page')
.page(CheckOutUrl)



test('From - Successfully Login ', async t =>{
  await t
  CheckOutPage.RandomUserName();
  CheckOutPage.RandomLastName();
  CheckOutPage.RandomZipCode();
  CheckOutPage.ContinueButton();
 
}
)

