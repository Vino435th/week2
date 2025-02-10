import {chromium, test} from '@playwright/test';
import { log } from "node:console";;
test('To create a Lead', async () => {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();   
    const page = await context.newPage();
await page.goto("https://login.salesforce.com/");
await page.locator("#username").fill("vinoth@testleaf.com");
await page.locator("#password").fill("Vino435th@6199");
await page.locator("#Login").click();
await page.waitForSelector('.slds-icon-waffle', { timeout: 60000 });
await page.locator(".slds-icon-waffle").click();

await page.locator("//button[contains(text(),'View All')]").click();
await page.getByTitle("//span[text()='All Apps']").isVisible();
await page.locator("(//span[@part='formatted-rich-text'])[8]").click();

await page.locator("//span[text()='Leads']/parent::a").click();
await page.waitForSelector("//button[text()='New']", { timeout: 60000 });
await page.locator("//button[text()='New']").click();

//await page.getByTitle("Salutation").isVisible();

await page.locator("[name='salutation']").click();
await page.locator("[role='option']").locator("//span[text()='Mr.']").click();
await page.locator("[name='lastName']").fill("B");
await page.locator("[name='Company']").fill("Testleaf");

await page.locator("[name='SaveEdit']").click();

})