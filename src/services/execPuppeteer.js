const { configPuppeteer } = require('./configPuppeteer');
const { loginPuppeteer } = require('./login');
const { extrairDados } = require('./extrair');

async function execPuppeteer(username, password, url) {

    try {
        
        const { browser, page } = await configPuppeteer(url);
        const loginResult = await loginPuppeteer(username, password, page);

        if (!loginResult.success) {
            await browser.close();
            return loginResult;
        }

        await page.goto("https://the-internet.herokuapp.com/challenging_dom")
        
        const extrairResult = await extrairDados(page);
        await browser.close();

        if (extrairResult.success) {
            return {
                success: true,
                messageLogin: loginResult.messageLogin,
                messageData: extrairResult.messageData,
                data: extrairResult.data
            };
        }

        else {
            return {
                success: false,
                messageLogin: loginResult.messageLogin,
                messageData: extrairResult.messageData
            };
        }

    }
    catch (error) {
        return {
            success: false,
            messageLogin: error.message,
            messageData: error.message
        };
    }



};

module.exports = { execPuppeteer };