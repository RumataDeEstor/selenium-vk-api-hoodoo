const webdriver = require('selenium-webdriver');

const { getRequestURL, processPayload, getUserCreds } = require('./helpers');

const { Key } = webdriver;
const URL = getRequestURL();
const CREDS = getUserCreds();

const EMAIL_FIELD = { name: 'email' };
const PASS_FIELD = { name: 'pass' };
const SUBMIT_BUTTON = { className: 'flat_button' };

// selenium-webdriver handles execution with SELENIUM_BROWSER env var by itself;
// chrome is used by default here
const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

function findAndClickEl(el) {
  return driver.findElement(el)
    .then(el => {
      el.click();
      return el;
    });
}

function main() {
  return driver.get(URL)
    .then(() => findAndClickEl(EMAIL_FIELD))
    .then(_ => _.sendKeys(CREDS.email))
    .then(() => findAndClickEl(PASS_FIELD))
    .then(_ => _.sendKeys(CREDS.password))
    .then(() => findAndClickEl(SUBMIT_BUTTON))
    .then(() => driver.getCurrentUrl())
    .then(_ => processPayload(__dirname, _))
    .then(() => driver.quit());
}

main();
