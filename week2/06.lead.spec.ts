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
await page.locator("//a[contains(text(),'Create Lead')]").click();
await page.getByTitle("Create Lead").isVisible();
await page.locator("#createLeadForm_companyName").fill("TestLeaf");
await page.locator("#createLeadForm_firstName").fill("Vino");
await page.locator("#createLeadForm_lastName").fill("B");
await page.locator("#createLeadForm_personalTitle").fill("Test");
await page.locator("#createLeadForm_generalProfTitle").fill("Dev");
await page.locator("#createLeadForm_annualRevenue").fill("1");
await page.locator("#createLeadForm_departmentName").fill("Testing");
await page.locator("#createLeadForm_primaryPhoneNumber").fill("9856894324");
await page.locator(".smallSubmit").click();

await page.waitForSelector('#viewLead_companyName_sp', {timeout: 60000})
const companyName = await page.isVisible("#viewLead_companyName_sp");
console.log(companyName);

const firstName = await page.isVisible("#viewLead_firstName_sp")
console.log(firstName);

const lastName = await page.isVisible("#viewLead_lastName_sp");
console.log(lastName)

})