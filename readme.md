# deno-examples

# Table of Contents

- [deno-examples](#deno-examples)
  - [Installation](#installation)
- [Usage](#usage)
  - [fetch](##fetch.ts)
  - [dateTime](##dateTime.ts)
  - [server](##server.ts)
  - [camelCase](##camelCase.ts)

# deno-examples

some basic examples of deno

## Installation

You have to install [deno](https://deno.land/#installation):

# Usage

## fetch.ts

```javascript
// on terminal
deno run --allow-net fetch.ts
{
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi   optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas..."
}
```

## dateTime.ts

```javascript
// on terminal
deno run datetime.ts
2019-01-19T21:00:00.000Z
```

## server.ts

```javascript
// on terminal
deno run --allow-net server.ts
// Go to http://localhost:8000 to run the app
```

## camelCase.ts

```javascript
// on terminal
deno run camelCase.ts
// output foobar
```

## myTest.ts

```javascript
// myTest.ts
deno test mytest.ts
Compile file:///Users/shinokada/Deno/demo/.deno.test.ts
running 1 tests
test title ... ok (5ms)
test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (6ms)
```
