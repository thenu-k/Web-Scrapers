import puppeteer from 'puppeteer';
const url = 'https://www.xe.com/currencyconverter/convert/?Amount=1&From=GBP&To=LKR';



async function scrape_web (){
    //Initiating the browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Waiting for the website to load
    await page.goto(url, {waitUntil: 'networkidle0'});
    
    //Run javascript inside the browser
    let data = await page.evaluate(() => {
        
        //Getting the data from the page
        let container = document.querySelector('.result__BigRate-sc-1bsijpp-1').innerHTML
        return container
        
    })
    
    console.log('Received value')
    data = data.split('')
    let formatted_data = data[0]+data[1]+data[2]+data[3]+data[4]+data[5];
    console.log(formatted_data)
    await browser.close();
    return formatted_data
}



export default scrape_web;