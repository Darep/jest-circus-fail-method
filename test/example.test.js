const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

const { example } = require('../src/example');

const mockAdapter = new MockAdapter(axios);

const failNetworkReq = (config) => {
  fail(`unknown network request ${config.method} ${config.url}`);
};

beforeEach(() => {
  mockAdapter.reset();

  // API mocks
  mockAdapter.onGet('/pages/javascript').reply(200, {}, {});

  // fail tests on unmocked requests
  mockAdapter.onAny().reply(failNetworkReq);
});

test('passing test with mock', async () => {
  await example('javascript');
});

test('failing test with no mock', async () => {
  await example('wrong');
});
