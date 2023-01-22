import {test} from "@playwright/test"
import HomePage from  "../Page/HomePage"
import LoginPage from "../Page/LoginPage"

const url ='https://www.saucedemo.com'


fixture('Login Page')
.page(url)


test('From - Successfully Login ', async t =>{
  await t
  LoginPage.setUserNamen('performance_glitch_user')
  LoginPage.setPassword('secret_sauce')
  LoginPage.clickOnLoginButton();

  
}
)
