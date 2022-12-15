import {BasePage} from './basePage'
import { By } from 'selenium-webdriver'

export class Marika extends BasePage {
    bookThisRoom: By = By.xpath ('//button[text()="Book this room"]')
    hackBtn: By = By.xpath('//button[text()= "Let me hack!"]')
    bookBtn: By = By.xpath('//button[text()= "Book"]')
    bookName: By = By.xpath('//input[@name="firstname"]')
    bookLastName: By = By.xpath('//input[@name="lastname"]')
    bookEmail: By = By.xpath('//input[@name="email"]')
    bookPhone: By = By.xpath('//input[@name="phone"]')
    cancelBtn: By = By.xpath('//button[text()= "Cancel"]')
    //Test2
    name: By = By.id('name')
    email: By = By.id('email')
    phoneNum: By = By.id('phone')
    subject: By = By.id('subject')
    msg: By = By.id('description')
    submit: By = By.id('submitContact')

    //selectors - what we are locating/ manipulatiing 
    constructor() {
        super({url: "https://automationintesting.online/"})
    }
    //methods - repeatable functionality 
    async clickToAccessBookingCal(){
        return await this.click(this.bookThisRoom)
    }
}
//selectors for contacting the hotel 
