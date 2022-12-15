import {BasePage} from './basePage'
import { By } from 'selenium-webdriver'

export class Marika extends BasePage {
    bookThisRoom: By = By.xpath ('//button[text()="Book this room"]')
    hackBtn: By = By.xpath('//button[text()= "Let ne hack!"]')
    bookBtn: By = By.xpath('//button[text()= "Book"]')
    cancelBtn: By = By.xpath('//button[text()= "Cancel"')
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
import {Builder, Capabilities, WebDriver, until, WebElement} from "selenium-webdriver"; 
export class RestPage {
    driver: WebDriver;
    url: string = "https://automationintesting.online";
    name: By = By.id('name')
    email: By = By.id('email')
    phoneNum: By = By.id('phone')
    subject: By = By.id('subject')
    msg: By = By.id('description')
    submit: By = By.id('submitContact')
    error: By = By.className('alert alert-danger')
    constructor(driver: WebDriver) {
        this.driver = driver;
    }
    //methods 
    async navigate(url:string): Promise<void>{
        if (url) return await this.driver.get(url);
        else if (this.url) return await this.driver.get(this.url)
        else return Promise.reject(
            "BasePage.navigate() needs a url defined on the page objects"
        )
    }
    async sendKeys(elementBy: By, Keys){
        await this.driver.wait(until.elementsLocated(elementBy))
        return this.driver.findElement(elementBy).sendKeys(Keys)
    }
    async getElemet(elementBy: By): Promise<WebElement>{
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element))
        return element; 
    }
    async Click(elementBy: By): Promise<void> {
        return(await this.getElemet(elementBy)).click();
    }
}