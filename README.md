# y-options

**Get Options Quotes from Yahoo**

## Example

```js
var yOptions = require('y-options')

var opts = {symbol: 'AAPL', date: '2015-01-17'}
yOptions(opts, function(err, quotes) {
  if (err) return console.error(err)

  console.log(quotes)

// { quote: 110.20
//   calls:
//    [ { strike: 27.86,
//        contractName: 'AAPL150117C00027860',
//        last: 82.74,
//        bid: 81.80,
//        ask: 82.15,
//        change: 0.00,
//        percentChange: 0.00%,
//        volume: 2,
//        openInterest: 505,
//        impliedVolatility: 287.50% },...],
//   puts:
//    [ { strike: 27.86,
//        contractName: 'AAPL150117P00027860',
//        last: 0.02,
//        bid: 0.00,
//        ask: 0.01,
//        change: 0.00,
//        percentChange: 0.00%,
//        volume: 0,
//        openInterest: 16591,
//        impliedVolatility: 262.50% },...] }

})

```

## API

### yOptions(opts, cb)

Go out and get those options.

This function returns a quotes object with `calls` and `puts` arrays. The callback should take the form: `function (err, quotes) {}`

#### `opts`

* `symbol`: 'AAPL', 'AMZN', etc...
* `date`: '2015-01-23' (should be a date that contracts exist for i.e. a Friday)

## License

MIT
