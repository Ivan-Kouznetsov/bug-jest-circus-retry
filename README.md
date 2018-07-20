# bug-jest-circus-retry [#6727](https://github.com/facebook/jest/issues/6727)

## 🐛 Bug Report
 [jest.retryTimes()](https://github.com/facebook/jest/blob/f45d1c939cbf55a71dbfdfc316d2be62b590197f/docs/JestObjectAPI.md#jestretrytimes) does not retry.

## To Reproduce

Follow the  [documented](https://github.com/facebook/jest/blob/f45d1c939cbf55a71dbfdfc316d2be62b590197f/docs/JestObjectAPI.md#jestretrytimes) steps

## Expected behavior

It should retry `n` times when `jest.retryTimes(n)` is set.

## Link to repl or repo (highly encouraged)

[Minimal Example Repo](https://github.com/laat/bug-jest-circus-retry)

## Run `npx envinfo --preset jest`

Paste the results here:

```bash
  System:
    OS: macOS High Sierra 10.13.6
    CPU: x64 Intel(R) Core(TM) i7-7820HQ CPU @ 2.90GHz
  Binaries:
    Node: 8.11.1 - ~/.nvm/versions/node/v8.11.1/bin/node
    Yarn: 1.7.0 - /usr/local/bin/yarn
    npm: 5.6.0 - ~/.nvm/versions/node/v8.11.1/bin/npm
  npmPackages:
    jest: ^23.4.1 => 23.4.1
```
