import {chromium, test} from '@playwright/test'

test('Create an account', async()=>{

const browser = await chromium.launch({headless: false});
const context = await browser.newContext();   
const page = await context.newPage();
await page.goto("https://login.salesforce.com/");
await page.getByLabel('Username').fill("vinoth@testleaf.com");
await page.getByLabel('Password').fill("Vino435th@6199");
await page.locator('#Login').click();
await page.waitForSelector('.slds-icon-waffle', { timeout: 60000 });
await page.locator(".slds-icon-waffle").click();
await page.getByText('View All').click();
await page.waitForTimeout(3000)
await page.getByPlaceholder('Search apps or items...').fill('Service');
await page.locator("(//span[@part='formatted-rich-text'])[1]").click();
await page.locator("//span[text()='Accounts']").click();
await page.waitForTimeout(10000)
await page.locator("//div[text()='New']").click();
await page.waitForTimeout(10000)
await page.locator("//input[@part='input']").fill("Siva");
await page.locator("//button[@name='SaveEdit']").click();
await page.waitForSelector('.toastMessage', { timeout: 5000 });
await page.locator(`.toastContainer`).isVisible();

})