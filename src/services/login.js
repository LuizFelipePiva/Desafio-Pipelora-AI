const { configPuppeteer } = require('./configPuppeteer');
const { extrairDados } = require('./extrair');

async function loginPuppeteer(username, password, page) {

    try {

        await page.waitForSelector('#username');
        await page.waitForSelector('#password');

        await page.type('#username', username);
        await page.type('#password', password);

        await Promise.all([
            page.waitForNavigation(),
            page.click('button[type="submit"]')
        ]);


        if (page.url().includes('secure')) {
            return {
                success: true,
                messageLogin: 'Login realizado com sucesso!',
            };
        }

        else {
            return {
                success: false,
                messageLogin: 'Erro no login!'
            };
        }

    }
    catch (error) {
        return {
            success: false,
            messageLogin: error.message
        };
    }
}
module.exports = { loginPuppeteer };