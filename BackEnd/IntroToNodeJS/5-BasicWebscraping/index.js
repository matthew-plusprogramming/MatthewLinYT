const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://twitchtracker.com/');
  // await page.screenshot({ path: 'example.png' });

  const [viewersWatchingDiv] = await page.$x(
    "//div[contains(text(), 'Viewers watching')]",
  );
  if (viewersWatchingDiv) {
    const sibling = await page.evaluate(
      (el) => el.nextElementSibling.innerText,
      viewersWatchingDiv,
    );
    console.log(sibling);
  }

  await browser.close();
})();
