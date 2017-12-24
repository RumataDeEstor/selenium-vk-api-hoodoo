# Get token from VK API using client app id

Note:

Drivers used here may become obsolete at any time ;D

(as well as selectors in this vk form)

Just for quick setup ATM.

You need to have Java installed.

Note that you need to have your standalone app registered in `vk.com`.

`npm start` is currently configured for Linux due to PATH :)

Alternatively, just download appropriate drivers, put them into root directory and run:

```sh
$ node index.js
```
or, f.e.

```sh
$ SELENIUM_BROWSER=firefox node index.js
```
### Env variables for this utility:
- `EMAIL` *(required)* - your VK email;
- `PASSWORD` *(required)* - your VK password;
- `CLIENT_ID` *(required)* - ID of your standalone APP in VK;
- `PAYLOAD_PATH` *(optional)* - you can specify the directory where you'll find `payload/token.txt`. By default it's project root directory.

### How to run?
- In `privateSettings/authReqData.json` you can change target scope of token or whatever.
- Then:

```sh
$ npm install
$ { all your env vars } npm start
```
It will run selenium with Chrome. To run with Firefox (selenium web driver will handle it), do:

```sh
$ SELENIUM_BROWSER=firefox npm start
```

If all is well, you'll see the following output in your console:

***Token is updated***.

You will find it here: `{PAYLOAD_PATH || ROOT}/payload/token.txt`.

Ready. Have a nice day. And be careful with your private data. Don't trust anyone.
