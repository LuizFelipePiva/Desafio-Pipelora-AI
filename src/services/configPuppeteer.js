const puppeteer = require('puppeteer');

async function configPuppeteer(url_sistema) {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(url_sistema);
    return { browser, page };
};

module.exports = { configPuppeteer };