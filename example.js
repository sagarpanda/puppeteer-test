const puppeteer = require('puppeteer');

const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();
await page.goto('http://mintint.channel4.local/mint/login/#/?_k=i5bpcd');
// await page.screenshot({path: 'example.png'});

// page.click(selector)
// page.tap(selector)
// page.type(selector, text)

const html = await page.$eval('.0.2.0.2.0.0.1', e => e.innerHTML);

test('Sign in page test', (done) => {
  console.log('html', html);
  expect(html).toBe('Sign in');
});

await browser.close();
