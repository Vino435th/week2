import {chromium, test} from '@playwright/test'

test('Edit Lead', async() => {
const browser = await chromium.launch({headless: false});
const context = await browser.newContext();   
const page = await context.newPage();
await page.goto("http://leaftaps.com/opentaps/control/main");
await page.locator("//input[@id='username']").fill("Demosalesmanager")
await page.locator("//input[@id='password']").fill("crmsfa")
await page.locator("//input[@type='submit']").click();
await page.locator("//a[contains(text(),'CRM')]").click();
await page.locator("//a[contains(text(),'Leads')]").click();
await page.getByTitle("My Leads").isVisible();
await page.locator("//a[text()='Find Leads']").click();
await page.isVisible("#sectionHeaderTitle_leads");
await page.locator("(//input[@name='firstName'])[3]").fill("jityaa");
await page.locator("//button[text()='Find Leads']").click();

await page.locator("#ext-gen956").click();
await page.getByTitle("Edit").isVisible();
await page.locator("//a[contains(text(),'Edit')]").click();
await page.waitForTimeout(2000)
await page.locator("#updateLeadForm_companyName").fill("LeafTest");
await page.locator("#updateLeadForm_annualRevenue").fill("2");
await page.locator("#updateLeadForm_departmentName").fill("Developer");
await page.locator("#updateLeadForm_description").fill("update the details");
await page.locator("//input[@value='Update']").click();
await page.getByTitle("Edit").isVisible();

})