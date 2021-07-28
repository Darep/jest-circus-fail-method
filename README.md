# jest-circus-fail

This app portrays how we use axios & axios-mock-adapter to mock the API and fail tests if an API endpoint is not mocked. Due to Jest v27 and jest-circus, this no longer works because jest-circus does not have a fail() method.

### Usage

Run tests:

```
npm test
```

See that the 'failing test with no mock' incorrectly passes the test.

Checkout `jasmine` branch to use jest-jasmine2 and run tests:

```
git checkout jasmine
npm test
````

Notice that 'failing test with no mock' fails correctly.
