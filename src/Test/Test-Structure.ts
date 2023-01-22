import { faker } from '@faker-js/faker';
import {Selector} from 'testcafe';
 

const usernameInput = Selector('input[name=user-name][type=text]');
const passwordInput = Selector('input[name=password][type=password]');
const loginButton = Selector('input[id=login-button]');
const Price=Selector('div[class=inventory_details_price]');
const Item1btn = Selector('a[id=item_5_title_link]');
const AddToCartButton_1 = Selector('button[id=add-to-cart-sauce-labs-fleece-jacket]');
const backbtn = Selector('button[id=back-to-products]');
const AddToCartButton_2 = Selector('button[id=add-to-cart-sauce-labs-backpack]'); 
const CartButton = Selector('a[class=shopping_cart_link]'); 
const CheckOutButton = Selector('button[id=checkout]'); 
const RandomUserName = faker.name.firstName(); 
const RandomLastName = faker.name.lastName(); 
const RandomZipCode = faker.address.zipCode();
const ContinueButton = Selector('input[id=continue]'); 
const FirstnameInput = Selector('input[id=first-name]');
const LastnameInput = Selector('input[id=last-name]');
const ZipCode = Selector('input[id=postal-code]');
const FinishButton = Selector('button[id=finish]'); 

fixture `Test Struture`
.page `https://www.saucedemo.com/`;

test.only('Assesment',async t =>{
  
  await t
  .maximizeWindow()
  .typeText(usernameInput,'performance_glitch_user')
  .typeText(passwordInput,'secret_sauce')
  .click(loginButton)
  .click(Item1btn)
  .expect((Price).innerText).contains('$49.99')
  .click(AddToCartButton_1)
  .click(backbtn)
  .click(AddToCartButton_2)
  .click(CartButton)
  .click(CheckOutButton)
  .typeText(FirstnameInput,RandomUserName)
  .typeText(LastnameInput,RandomLastName)
  .typeText(ZipCode,RandomZipCode)
  .click(ContinueButton)
  .click(FinishButton)

});
