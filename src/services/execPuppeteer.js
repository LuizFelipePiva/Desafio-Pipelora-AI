const { configPuppeteer } = require('./configPuppeteer');
const { loginPuppeteer } = require('./login');
const { extrairDados } = require('./extrair');

async function execPuppeteer(login, senha, url) {

    try {
        
        const { browser, page } = await configPuppeteer(url);
        const loginResult = await loginPuppeteer(login, senha, page);

        if (!loginResult.success) {
            await browser.close();
            return loginResult;
        }
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