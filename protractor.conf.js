module.exports.config = {
  baseUrl: 'http://infinite-savannah-93746.herokuapp.com',
  specs: ['./e2e/*.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
       "--headless",
        "--disable-gpu",
        "--window-size=1024,768",
      ],
    },
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
  },
  highlightDelay: 2000,
};
