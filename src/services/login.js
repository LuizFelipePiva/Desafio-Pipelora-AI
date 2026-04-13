// const { configPuppeteer } = require('./configPuppeteer');
// const { extrairDados } = require('./extrair');

async function loginPuppeteer(login, senha, page) {

    try {

        await page.waitForSelector('#username');
        await page.waitForSelector('#password');

        await page.type('#username', login);
        await page.type('#password', senha);

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