async function gotoURL(url, selector) {
  await page.goto(url);
  if (selector) {
    await page.waitForSelector(selector);
  }
}

export default gotoURL;
