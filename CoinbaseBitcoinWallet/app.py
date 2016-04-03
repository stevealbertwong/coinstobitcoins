
from flask import Flask, render_template

app = Flask(__name__) # create an app using flask
@app.route("/") # define basic route with corresponding request handler
def main():
    return render_template('index.html')

if __name__ == "__main__": # check if the executed file is the main program and run the app
    app.run()

#Set up environment

##Authenticate with Wallet API

#
# from coinbase.wallet.client import Client
#
# SANDBOX_URL = 'https://api.sandbox.coinbase.com'
# client = Client('XCIVEShV4fLmuWaI', '4lYfR0OXof2gVRgBJsGGx4PgmWTugXqU', base_api_uri=SANDBOX_URL)
#
# # an authenticated "client object"
#
#
#
#
#
# # METHODS from "client object"
#
#
#
# ## list "client object" wallets and transactions
# accounts = client.get_accounts()
# for account in accounts.data:
#   balance = account.balance
#   print "%s: %s %s" % (account.name, balance.amount, balance.currency)
#   print account.get_transactions()
#
# ## create a new wallet
#
# account = client.create_account(name="New Wallet")
# balance = account.balance
# print "%s: %s %s" % (account.name, balance.amount, balance.currency)
#
#
#
#
# ## send coins to new account from primary account
#
# #??????? why primary account + what is bitcoin address + Generate a new bitcoin address for your primary account
# ###### sending from your primary account to your new account for testing purpose
# primary_account = client.get_primary_account()
# address = account.create_address()
# primary_account.send_money(to=address.address, amount='0.01', currency='BTC', description='For being awesome!')
#
# ## retrieve account data
# print primary_account.get_transactions()[-1] # view last transaction
# primary_account.refresh()
# balance = primary_account.balance
# print "%s: %s %s" % (primary_account.name, balance.amount, balance.currency)
#
#
#
#
#
# ## request coins request 0.1 BTC from bitdiddle@example.com
# primary_account = client.get_primary_account()
# tx = primary_account.request_money(to='bitdiddle@example.com', amount='0.01', currency='BTC')
#
# # ## buy bitcoin
# #
# # account = client.get_primary_account()
# # payment_method = client.get_payment_methods()[0] # verified payment method
# #
# # buy_price_threshold  = 200 # simple price check, trigger buy/sell if cross threshold
# # sell_price_threshold = 500
# #
# # buy_price  = client.get_buy_price(currency='USD')
# # sell_price = client.get_sell_price(currency='USD')
# #
# # if float(sell_price.amount) <= sell_price_threshold
# #   sell = account.sell(amount='1',
# #                       currency="BTC",
# #                       payment_method=payment_method.id)
# #
# # end
# #
# # if float(buy_price.amount) <= buy_price_threshold
# #   buy = account.buy(amount='1',
# #                     currency="BTC",
# #                     payment_method=payment_method.id)
# #
# # end
#
# # generate new bitcoin address
#
