const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
(async () => {
  const browser = await puppeteer.launch({
    ignoreDefaultArgs: ["--disable-extensions"],
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  page.setViewport({
    width: 1920,
    height: 0,
  });
  await page.goto("http://127.0.0.1:5500/index.html", {
    waitUntil: "networkidle2",
  });
  // await page.screenshot({ path: '17dc.jpg', fullPage: true });
  const content = await page.content();
  console.log(content);
  // await fs.promises.writeFile(path.join(__dirname, 'export.html'), content)

  await browser.close();
})();
