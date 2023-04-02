const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
  
const delay = ms => new Promise(res => setTimeout(res, ms));


puppeteer.launch({ headless: false, executablePath: "../../../../Downloads/Brave\ Browser.app/Contents/MacOS/Brave Browser", userDataDir: '../../../../Library/Application\ Support/BraveSoftware/Brave-Browser/' }).then(async browser => {
  console.log('Running tests..')
  const array = ['http://www.youtube.com/channel/UCvQECJukTDE2i6aCoMnS-Vg', 'http://www.youtube.com/channel/UCvlkMq7QfHFK5VJZa0aeMeQ', 'http://www.youtube.com/channel/UCyOyIUC4bBPjNWkd5gG30TA', 'http://www.youtube.com/channel/UCzR-rom72PHN9Zg7RML9EbA', 'http://www.youtube.com/channel/UCzUYuC_9XdUUdrnyLii8WYg', 'http://www.youtube.com/channel/UCzb-6smlTg5UPirLdsdQ_cQ', 'http://www.youtube.com/channel/UCznAVGW0rciFfbJzDkgBybg']
  const page = await browser.newPage()
  const doSomething = async () => {
    console.log(url)
      await delay(2000);
      await page.goto(url)
      await delay(2000);
      const element = await page.waitForSelector('#subscribe-button > ytd-subscribe-button-renderer > yt-button-shape');
      console.log(element)
      await element.click()
  }
  await page.goto("http://www.youtube.com")
  for (url of array) {
    await doSomething()
  }
})
