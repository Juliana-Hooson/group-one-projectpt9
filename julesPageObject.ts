import {By} from "selenium-webdriver"
import {BasePage} from './basePage'

export class PetStore extends BasePage {
    HomePage: By = By.xpath('//a[@href="/actions/Catalog.action?viewCategory=&categoryId=CATS"]')
    CatCategory: By = By.xpath('//a[@href="/actions/Catalog.action?viewItem=&amp;itemId=EST-16"]');
    PersianCat: By = By.xpath('//a[@href="/actions/Catalog.action?viewProduct=&productId=FL-DLH-02"]');
    AdultFemaleCatPersianImage: By=By.xpath('//img[@src="../images/cat1.gif"]');
    returnToCatCategory: By = By.xpath('//a[@href="/actions/Catalog.action?viewProduct=&productId=FL-DLH-02"]');
    returnToCats: By = By.xpath('//a[@href="/actions/Catalog.action?viewCategory=&categoryId=CATS"]');
    returnToHomePage: By = By.xpath('//div[@id="Main"]')

    constructor() {
        super ({url:"https://petstore.octoperf.com/actions/Catalog.action"});
    };
    async getResults() {
        return await this.getText(this.returnToHomePage);
    };
}