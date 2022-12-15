import { By } from "selenium-webdriver";
import { Marika } from "./marikaPage";
const marika = new Marika ()

describe('Marika Solo Capstone Project', () => {
    test('opening url and clicking on book', async () => {
        await marika.navigate();
        await marika.driver.sleep(5000)
        await marika.click(marika.hackBtn);
        await marika.clickToAccessBookingCal();
        await marika.click(marika.bookName);
        await marika.setInput(marika.bookName, "Jane");
        await marika.click(marika.bookLastName);
        await marika.setInput(marika.bookLastName, "Doe")
        await marika.click(marika.email);
        await marika.setInput(marika.email, "janedoe@yahoo.com");
        await marika.click(marika.bookPhone);
        await marika.setInput(marika.bookPhone, "7184710988");
        await marika.click(marika.bookBtn);
        await marika.click(marika.cancelBtn)
    
    })
    test('contact us', async () => {
        await marika.navigate();
        await marika.click(marika.name);
        await marika.setInput(marika.name, "Jane Doe");
        await marika.click(marika.email);
        await marika.setInput(marika.email, "janedoe@yahoo.com");
        await marika.click(marika.phoneNum);
        await marika.setInput(marika.phoneNum, "7184710988");
        await marika.click(marika.subject);
        await marika.setInput(marika.subject, "My July Booking");
        await marika.click(marika.msg);
        await marika.setInput(marika.msg, "Please confirm my July booking");
        await marika.click(marika.submit);
        await marika.driver.quit()
        

    
    
    
    })
    
})



