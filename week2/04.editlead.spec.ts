import {chromium, test} from '@playwright/test'

test('Edit Lead', async() => {
const browser = await chromium.launch({headless: false});
const context = await browser.newContext();   
const page = await context.newPage();
await page.goto("http://leaftaps.com/opentaps/control/main");
await page.locator("//input[@id='username']").fill("democsr")
await page.locator("//input[@id='password']").fill("crmsfa")
await page.locator("//input[@type='submit']").click();
await page.locator("//a[contains(text(),'CRM')]").click();
await page.locator("//a[contains(text(),'Leads')]").click();
await page.getByTitle("My Leads").isVisible();
await page.locator("//a[contains(text(),'Create Lead')]").click();
await page.getByTitle("Create Lead").isVisible();
await page.locator("#createLeadForm_companyName").fill("TestLeaf");
await page.locator("#createLeadForm_firstName").fill("Vinoth");
await page.locator("#createLeadForm_lastName").fill("B");
await page.locator(".smallSubmit").click();
await page.getByTitle("Edit").isVisible();
await page.locator("//a[contains(text(),'Edit')]").click();
await page.waitForTimeout(2000)
await page.locator("#updateLeadForm_companyName").fill("LeafTest");
await page.locator("//input[@value='Update']").click();
await page.getByTitle("Edit").isVisible();
})