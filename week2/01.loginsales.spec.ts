import {chromium, test} from '@playwright/test'
import {log} from 'node:console'
test('Log in salesforce', async () => {

const browser = await chromium.launch({headless: false});

const context = await browser.newContext();

const page = await context.newPage();

await page.goto("https://login.salesforce.com/");

await page.locator("#username").fill("vinoth@testleaf.com");

await page.locator("#password").fill("Vino435th@6199");

await page.locator("#Login").click();

await page.waitForTimeout(10000)

const url = page.url;
console.log("current url: " , url);

const title = await page.title();
console.log(title);

await page.close();
})
