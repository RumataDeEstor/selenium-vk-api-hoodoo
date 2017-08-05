# Get token from VK API using client app id

Note that you need to have your standalone app registered in `vk.com`.
### How to run?
- First, plug in your credentials here: `privateSettings/creds.json`
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
You will find it here:
`payload/token.txt`.

Ready. Have a nice day. And be careful with your private data. Don't trust anyone.