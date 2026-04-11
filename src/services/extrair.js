async function extrairDados(page) {

    try {
        await page.goto("https://the-internet.herokuapp.com/challenging_dom")

        await page.waitForSelector('#content table');

        const name = await page.$$('#content table thead tr th');
        const header = [];

        for (const col of name) {
            const text = await page.evaluate(th => th.textContent, col);
            //console.log(text);
            if(text === 'Action') continue;
            header.push(text);
        }

        //console.log(header);

        const lines = await page.$$('#content table tbody tr');
        const data = [];

        for (const line of lines) {

            const col = await line.$$('td');
            const dado = {}

            for (let i = 0; i < col.length; i++) {
                const text = await page.evaluate(td => td.textContent, col[i]);
                //console.log(text)
                if(text.includes('edit') || text.includes('delete')) continue;

                dado[header[i]] = text;
            }

            data.push(dado);
        }

        //console.log(data);
        

        if (data.length > 0) {
            return {
                success: true,
                messageData: "Dados extraídos com sucesso!",
                data
            };
        }

        else {
            return { 
                success: false, 
                messageData: "Nenhum dado encontrado." 
            };
        }

    } catch (error) {
        return { 
            success: false, 
            messageData: error.message 
        };
    }

}

module.exports = { extrairDados };