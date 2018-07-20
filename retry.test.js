const path = require("path");
const fs = require("fs");

/**
 * It does not actually retry the tests.
 *
 * By commenting out the line:
 * https://github.com/facebook/jest/blob/f45d1c939cbf55a71dbfdfc316d2be62b590197f/packages/jest-circus/src/run.js#L150
 *
 * It retries 2 times. (off by 1)
 */
jest.retryTimes(3);

it("retries", () => {
  const countPath = path.join(__dirname, ".tries");
  const tries = Number(fs.readFileSync(countPath, "utf8"));
  fs.writeFileSync(countPath, String(tries + 1), "utf8");
  expect(tries).toBeGreaterThanOrEqual(2);
});
