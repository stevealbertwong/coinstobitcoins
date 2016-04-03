var express = require('express');
var app = express();

var router = express.Router();



app.use(express.static(__dirname + '/public'));     //serve static assets

app.get('*', function(req, res) {
    res.sendfile('./public/heycoins.htm'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(3000)





// //api for all posts
// router.route('/posts')

//     //create a new post
//     .post(function(req, res){

//         //TODO create a new post in the database
//         res.send({message:"TODO create a new post in the database"});
//     })

//     .get(function(req, res){

//         //TODO get all the posts in the database
//         res.send({message:"TODO get all the posts in the database"});
//     })

// //api for a specfic post
// router.route('/posts/:id')

//     //create
//     .put(function(req,res){
//         return res.send({message:'TODO modify an existing post by using param ' + req.param.id});
//     })

//     .get(function(req,res){
//         return res.send({message:'TODO get an existing post by using param ' + req.param.id});
//     })

//     .delete(function(req,res){
//         return res.send({message:'TODO delete an existing post by using param ' + req.param.id})
//     });

// module.exports = router;



// var Client = require('coinbase').Client;

// var client = new Client({
//   'apiKey': '8ndiov14hwg2iml6',
//   'apiSecret': 'P93aqHHcidFw4Aw3Mngu2YBwbN3QKSqX',
//   'baseApiUri': 'https://api.sandbox.coinbase.com/v2/',
//   'tokenUri': 'https://api.sandbox.coinbase.com/oauth/token'
// });



// client.getAccounts({}, function(err, accounts) {
//   accounts.forEach(function(acct) {
//     console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
//     acct.getTransactions(null, function(err, txns) {
//       txns.forEach(function(txn) {
//         console.log('txn: ' + txn.id);
//       });
//     });
//   });
// });


// // create a bew wallet

// client.createAccount({'name': 'New Wallet'}, function(err, acct) {
//   console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
// });


// // // send bitcoin

// // client.getAccount('primary', function(err, account) {
// //   account.createAddress(function(err, addr) {
// //     console.log(addr);
// //     address = addr;
// //   });
// // });

// // client.getAccount('primary', function(err, primaryAccount) {
// //   // Generate a new bitcoin address for the account from previous steps:
// //   account.createAddress(null, function(err, address) {
// //     // Send coins to the new account from your primary account:
// //     primaryAccount.sendMoney({'to': address.address,
// //                               'amount': '0.01',
// //                               'currency': 'BTC',
// //                               'description': 'For being awesome!'}, function(err, tx) {
// //        console.log(tx);
// //     });
// //   });
// // });


// // refresh the account

// client.getAccount('primary', function(err, acct) {
//   console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
// });



// //  request fund

// client.getAccount('primary', function(err, account) {
//   account.requestMoney({'to': 'bitdiddle@example.com','amount': '0.1', 'currency': 'BTC'}, function(err, tx) {
//     console.log(tx);
//   });
// });


// var buyPriceThreshold  = 200;
// var sellPriceThreshold = 500;

// client.getAccount('primary', function(err, account) {

//   client.getSellPrice({'currency': 'USD'}, function(err, sellPrice) {
//     if (parseFloat(sellPrice['amount']) <= sellPriceThreshold) {
//       account.sell({'amount': '1',
//                     'currency': 'BTC'}, function(err, sell) {
//         console.log(sell);
//       });
//     }
//   });

//   client.getBuyPrice({'currency': 'USD'}, function(err, buyPrice) {
//     if (parseFloat(buyPrice['amount']) <= buyPriceThreshold) {
//       account.buy({'amount': '1',
//                    'currency': 'BTC'}, function(err, buy) {
//         console.log(buy);
//       });
//     }
//   });

// });
