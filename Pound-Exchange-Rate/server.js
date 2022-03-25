import express from 'express'
const app = express()
import scrape_web from './scrape_web.js'
import {} from 'dotenv/config'


app.get('/get/pound_rate', async (req, res)=>{
    try{
        let data = await scrape_web()
        res.send({
            "Conversion Rate" : data
        }
        )
    }
    catch(e){
        console.log('Server Error', e)
        res.send({
            "Error": "Internal Server Error, try again later",
            "Error Value": e
        }
        )
    }

})

app.listen(process.env.PORT, '0.0.0.0')
