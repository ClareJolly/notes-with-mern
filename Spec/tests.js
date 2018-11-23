require('chromedriver');
const webdriver = require('selenium-webdriver');
const { By, until } = webdriver;

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const driver = new webdriver.Builder().forBrowser('chrome').build();
const expect = chai.expect;

describe('End to End Test Suite', done => {
  before(done => {
    console.log('Go to page');
    driver.get('http://localhost:5001')
    done()
  });

  it('Can connect to the server', () => {
    // console.log('Ready to read welcome message');
    return expect(driver.findElement(By.id('message')).getAttribute('innerHTML'))
    .to.eventually.contain('NodeNotes');
  });

  it('can read welcome message', () => {
    // console.log('Ready to read welcome message');

return expect(driver.findElement(By.tagName("body")).getText()).to.eventually.contain("NodeNotes");
  });
});
