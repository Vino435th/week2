import {chromium, firefox, test } from '@playwright/test';
import {log} from 'node:console';

test('To Url in two different browser', async () =>{

const browser1 = await chromium.launch({headless: false, channel: 'msedge'})

const context1 = await browser1.newContext();

const page1 = await context1.newPage();

await page1.goto("https://www.redbus.in/");

const url1 =  page1.url();
console.log(url1);
const title1 = await page1.title();
console.log(title1)

const browser2 = await firefox.launch({headless: false})

const context2 = await browser2.newContext();
const page2 = await context2.newPage();

await page2.goto("https://www.flipkart.com/",);

const url2 = page2.url();
console.log(url2)
const title2 = await page2.title();
console.log(title2);


})