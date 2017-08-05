# Get token from VK API using client app id

Note:

Drivers used here may become obsolete at any time ;D

Just for quick setup ATM.

Note that you need to have your standalone app registered in `vk.com`.

`npm start` is currently configured for Linux due to PATH :)

Alternatively, just download appropriate drivers, put them into root directory and run:

```sh
$ node index.js
```
or, f.e.

```sh
$ $ SELENIUM_BROWSER=firefox node index.js
```

### How to run?
- First, plug in your credentials here: `privateSettings/creds.json`
- And clientId for your standalone app here: `privateSettings/authReqData.json`
- You can change target scope of token or whatever.
- Then run:

```sh
$ npm install
$ npm start
```
It will run selenium with Chrome. To run with Firefox, do:

```sh
$ SELENIUM_BROWSER=firefox npm start
```

If all is well, you'll see the following output in your console:

***Token is updated***.

You will find it here: `payload/token.txt`.

Ready. Have a nice day. And be careful with your private data. Don't trust anyone.
