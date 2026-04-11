const express = require('express');
const router = express.Router();
const fs = require('fs');

const { execPuppeteer } = require('../services/execPuppeteer');

router.post('/', async (req, res) => {
    const { login, senha, url_sistema } = req.body;

    try {
        const data = await execPuppeteer(login, senha, url_sistema);

        console.log(JSON.stringify(data, null, 2));
        fs.writeFileSync('result.json', JSON.stringify(data, null, 2));

        if (data.success === true) {

            return res.status(200).json({

                success: data.success,
                messageLogin: data.messageLogin,
                messageData: data.messageData,
                total: data.data.length,
                data: data.data

            });


        } else {
            return res.status(401).json({

                success: false,
                messageLogin: data.messageLogin,
                messageData: data.messageData

            });
        }
    }

    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }

});

module.exports = router;