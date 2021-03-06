const util = require('../util');
const rpc = require('../rpc');

exports.sendMessage = function (reqBody, mac, callbackFunc) {
    reqBody = JSON.stringify(reqBody);
    var args = {
        requestURI: 'https://sms.qiniuapi.com/v1/message',
        reqBody: reqBody,
        mac: mac
    };
    post(args, callbackFunc);
};

exports.sendSingleMessage = function (reqBody, mac, callbackFunc) {
    reqBody = JSON.stringify(reqBody);
    var args = {
        requestURI: 'https://sms.qiniuapi.com/v1/message/single',
        reqBody: reqBody,
        mac: mac
    };
    post(args, callbackFunc);
};

exports.sendOverseaMessage = function (reqBody, mac, callbackFunc) {
    reqBody = JSON.stringify(reqBody);
    var args = {
        requestURI: 'https://sms.qiniuapi.com/v1/message/oversea',
        reqBody: reqBody,
        mac: mac
    };
    post(args, callbackFunc);
};

exports.sendFulltextMessage = function (reqBody, mac, callbackFunc) {
    reqBody = JSON.stringify(reqBody);
    var args = {
        requestURI: 'https://sms.qiniuapi.com/v1/message/fulltext',
        reqBody: reqBody,
        mac: mac
    };
    post(args, callbackFunc);
};

function post (args, callbackFunc) {
    var contentType = 'application/json';
    var accessToken = util.generateAccessTokenV2(args.mac, args.requestURI, 'POST', contentType, args.reqBody);
    var headers = {
        Authorization: accessToken,
        'Content-Type': contentType
    };
    rpc.post(args.requestURI, args.reqBody, headers, callbackFunc);
}
