import { Marika } from "./marikaPage";
const marika = new Marika ()

describe('Marika Solo Capstone Project', () => {
    test('opening url and clicking on book', async () => {
        await marika.navigate()
        await marika.click(marika.hackBtn)
        await marika.clickToAccessBookingCal
        await marika.click(marika.bookBtn)
        await marika.click(marika.cancelBtn)
        await marika.driver.quit()
    })
})

import { RestPage } from "./marikaPage";
const chromedriver = require("chromedriver");
test('contact us', async () => {
    await marika.navigate();
    await marika.getElement(page.name);
    await marika.setInput(page.name, "Jane Doe");
    await marika.getElement(page.email);
    await marika.setInput(page.email, "janedoe@yahoo.com");
    await marika.getElement(page.phoneNum);
    await marika.setInput(page.phoneNum, "7188682828");
    
})
