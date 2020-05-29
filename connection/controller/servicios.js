const express = require('express')
const router = express.Router()
const { poolPromise } = require('../DB')
const sql = require('mssql')


router.get('/servicios', async (req, res) => {
    try {
        const pool = await poolPromise
        const result = await pool.request()
            .query('select top(10) * from tb_serviciosagentes', function (err, profileset) {
                if (err) {
                    console.log(err)
                }
                else {
                    var send_data = profileset.recordset;
                    res.json(send_data);
                }
            })
            //res.json({mensaje: "algo pasa"})
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
})

router.get('/servicios2', async (req, res) => {
    try {
        
        res.json({mensaje: "servicios 2"})
    } catch (err) {
        res.status(500)
        res.send(err.message)
    }
})


module.exports = router;