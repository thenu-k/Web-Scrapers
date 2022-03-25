This project will use the node module puppeteer to scrape the web.

Errors:
    If the application says that the browser file cannot be found, manually download the file and link it:
    ```
        const browser = await puppeteer.launch({
            headless:false,
          args: ["--no-sandbox"]
        });
    ```
    The no sandbox argument is neccessary if you are the root user.