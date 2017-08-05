const fs = require('fs');

const CREDS = require('../privateSettings/creds.json');
const AUTH_REQ_DATA = require('../privateSettings/authReqData.json');

function processPayload(root, url) {
  const token = getTokenFromStr(url);

  writeTokenToFile(root, token);
}

function getUserCreds() {
  return CREDS;
}

function getTokenFromStr(str) {
  return str.match(/token=(\w+)/)[1];
}

function writeTokenToFile(root, token) {
  const dir = `${root}/payload`;
  const filename = 'token.txt';

  createDirIfNotExist(dir);

  let stream = fs
    .createWriteStream(`${dir}/${filename}`, { defaultEncoding: 'utf8' });

  stream.write(token);
  stream.end();
  stream.on("finish", () => { console.log('Token updated.') });
}

function createDirIfNotExist(dir) {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
}

function getRequestURL() {
  const { baseURL, method, clientId, display, redirectLoc, scope, responseType,
    vkAPIVersion, controlString } = AUTH_REQ_DATA;

  const redirectUri = `${baseURL}/${redirectLoc}`;
  const queryParams = {
    client_id: clientId,
    display,
    redirect_uri: redirectUri,
    scope,
    response_type: responseType,
    v: vkAPIVersion,
    state: controlString,
  };

  let queryString = '';

  Object.keys(queryParams)
    .forEach((key) => {
      queryString += `${key}=${queryParams[key]}&`
    })

  queryString = queryString.slice(0, -1);

  return `${baseURL}/${method}?${queryString}`;
}

module.exports = {
  processPayload,
  getRequestURL,
  getUserCreds,
};
