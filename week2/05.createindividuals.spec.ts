import {chromium, test} from '@playwright/test';

test('To create a Individuals', async () => {
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
await page.waitForTimeout(60000);
await page.getByPlaceholder('Search apps or items...').fill('Individuals');
await page.getByText("Individuals").click();
await page.waitForTimeout(60000);
await page.locator("//div[text()='New']").click();
await page.waitForTimeout(60000);
await page.getByLabel('Last Name').fill("B");
await page.locator("//button[@name='SaveEdit']").click();
await page.waitForSelector('.toastMessage', { timeout: 5000 });
await page.locator(`.toastContainer`).isVisible();
})