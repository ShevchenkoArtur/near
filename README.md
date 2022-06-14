Donation App
==================
The contract is written in [AssebmlyScript](https://www.assemblyscript.org/introduction.html), and UI in [React](https://reactjs.org/docs/getting-started.html).
You can log in via [Near](https://wallet.testnet.near.org/) account and create own posts with content and donate to them.
   
You can try the deployed application on [Vercel](https://vercel.com/dashboard): [DonationApp](https://near-donation-dapp.vercel.app/)

Quick Start
===========

To run this project locally:

1. Prerequisites: Make sure you've installed [Node.js] ≥ 12
2. Install dependencies: `npm install`
3. Run the local development server: `npm start` (see `package.json` for a
   full list of `scripts` you can run with `npm`)

Now you'll have a local development environment backed by the NEAR TestNet!

Go ahead and play with the app and the code. As you make code changes, the app will automatically reload.


Exploring The Code
==================

1. The "backend" code lives in the `/contract/assebmly` folder. You can find out them contract code and tests
2. The frontend code lives in the `/src` folder. You can find out utils and config files configuration and other components

Deploy
======

Every smart contract in NEAR has its [own associated account][NEAR accounts]. When you run `npm dev`, your smart contracts get deployed to the live NEAR TestNet with a throwaway account. When you're ready to make it permanent, here's how.


Step 0: Install near-cli
--------------------------

You need near-cli installed globally. Here's how:

    npm install --global near-cli

This will give you the `near` CLI tool. Ensure that it's installed with:

    near --version


Step 1: Create an account for the contract
------------------------------------------

Visit [NEAR Wallet] and make a new account. You'll be deploying these smart contracts to this new account.

Now authorize NEAR CLI for this new account, and follow the instructions it gives you:

    near login


Step 2: set contract name in code
---------------------------------

Modify the line in `src/config.js` that sets the account name of the contract. Set it to the account id you used above.

    const CONTRACT_NAME = process.env.CONTRACT_NAME || 'your-account-here!'

Step 4: deploy!
---------------

One command:

    npm deploy

[React]: https://reactjs.org/
[create-near-app]: https://github.com/near/create-near-app
[Node.js]: https://nodejs.org/en/download/package-manager/
[jest]: https://jestjs.io/
[NEAR accounts]: https://docs.near.org/docs/concepts/account
[NEAR Wallet]: https://wallet.testnet.near.org/
[near-cli]: https://github.com/near/near-cli
[gh-pages]: https://github.com/tschaub/gh-pages