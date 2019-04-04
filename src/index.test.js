import gotoUrl from './utils/gotoUrl';

describe('Webpages', () => {
  const selector = '.form-signin';

  describe('Landing Page Check', () => {
    beforeAll(async () => {
      await gotoUrl('http://sagarpanda.github.io/fronto/public/', selector);
    });

    it('Landed', async () => {
      await page.waitForSelector(selector);
      const html = await page.$eval(selector, e => e.firstElementChild.textContent);
      expect(html).toBe('Please sign in');
    });
  });

});
