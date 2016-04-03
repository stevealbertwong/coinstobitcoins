
var Client = require('coinbase').Client;

var client = new Client({
  'apiKey': '8ndiov14hwg2iml6',
  'apiSecret': 'P93aqHHcidFw4Aw3Mngu2YBwbN3QKSqX',
  'baseApiUri': 'https://api.coinbase.com/v2/',
  'tokenUri': 'https://api.coinbase.com/oauth/token'
});



client.getAccounts({}, function(err, accounts) {
	if (err){
		throw err
	};
  accounts.forEach(function(acct) {
    console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
    acct.getTransactions(null, function(err, txns) {
      txns.forEach(function(txn) {
        console.log('txn: ' + txn.id);
      });
    });
  });
});


// create a bew wallet

client.createAccount({'name': 'New Wallet'}, function(err, acct) {
		if (err){
		throw err
	};
  console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
});