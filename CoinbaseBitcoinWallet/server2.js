var Client = require('coinbase').Client;

var client = new Client({
  'apiKey': '8ndiov14hwg2iml6',
  'apiSecret': 'P93aqHHcidFw4Aw3Mngu2YBwbN3QKSqX',
  'baseApiUri': 'https://api.sandbox.coinbase.com/v2/',
  'tokenUri': 'https://api.sandbox.coinbase.com/oauth/token'
});


client.getAccounts({}, function(err, accounts) {
  accounts.forEach(function(acct) {
    console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
    acct.getTransactions(null, function(err, txns) {
      txns.forEach(function(txn) {
        console.log('txn: ' + txn.id);
      });
    });
  });
});



client.createAccount({'name': 'New Wallet'}, function(err, acct) {
  console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
});



client.getAccount('primary', function(err, primaryAccount) {
  // Generate a new bitcoin address for the account from previous steps:
  account.createAddress(null, function(err, address) {
    // Send coins to the new account from your primary account:
    primaryAccount.sendMoney({'to': address.address,
                              'amount': '0.01',
                              'currency': 'BTC',
                              'description': 'For being awesome!'}, function(err, tx) {
       console.log(tx);
    });
  });
});


// refresh the account

client.getAccount(primaryAccount.id, function(err, acct) {
  console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
});



//  request fund

client.getAccount('primary', function(err, account) {
  account.requestMoney({'to': 'bitdiddle@example.com',
                        'amount': '0.1',
                        'currency': 'BTC'}, function(err, tx) {
    console.log(tx);
  });
});


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
