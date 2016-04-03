
var Client = require('coinbase').Client;

var client = new Client({
  'apiKey': '8ndiov14hwg2iml6',
  'apiSecret': 'P93aqHHcidFw4Aw3Mngu2YBwbN3QKSqX',
  'baseApiUri': 'https://api.coinbase.com/v2/',
  'tokenUri': 'https://api.coinbase.com/oauth/token'
});

// buy and sell 
var buyPriceThreshold  = 200;
var sellPriceThreshold = 500;

client.getAccount('primary', function(err, account) {

  client.getSellPrice({'currency': 'USD'}, function(err, sellPrice) {
    if (parseFloat(sellPrice['amount']) <= sellPriceThreshold) {
      account.sell({'amount': '1',
                    'currency': 'BTC'}, function(err, sell) {
        console.log(sell);
      });
    }
  });

  client.getBuyPrice({'currency': 'USD'}, function(err, buyPrice) {
    if (parseFloat(buyPrice['amount']) <= buyPriceThreshold) {
      account.buy({'amount': '1',
                   'currency': 'BTC'}, function(err, buy) {
        console.log(buy);
      });
    }
  });

});