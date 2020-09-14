const moment = require('moment')
const chalk = require("chalk")

let globalName = '';

function setGlobalName(name)
{
    globalName = name;
}

function log()
{
    let args = Array.prototype.slice.call(arguments);
    args.unshift(moment().format("DD-MM-YYYY HH:mm:ss") + (globalName ? ` [${globalName}]` : '') + ':');
    console.info.apply(console, args);

    return this;
}

function warn()
{
    let args = Array.prototype.slice.call(arguments);
    args.unshift(moment().format("DD-MM-YYYY HH:mm:ss") + (globalName ? ` [${globalName}]` : '') + ':');
    console.info.apply(console, args);
}

function dir()
{
    let args = Array.prototype.slice.call(arguments);
    args.unshift(moment().format("DD-MM-YYYY HH:mm:ss") + (globalName ? ` [${globalName}]` : '') + ':');
    console.info.apply(console, args);
    return this;
}

function error()
{
    let args = Array.prototype.slice.call(arguments);
    args.unshift(moment().format("DD-MM-YYYY HH:mm:ss") + (globalName ? ` [${globalName}]` : '') + ':');
    console.info.apply(console, args);
    return this;
}

function info()
{
    let args = Array.prototype.slice.call(arguments);
    args.unshift(moment().format("DD-MM-YYYY HH:mm:ss") + (globalName ? ` [${globalName}]` : '') + ':');
    console.info.apply(console, args);
    return this;
}

function trace()
{
    let args = Array.prototype.slice.call(arguments);
    args.unshift(moment().format("DD-MM-YYYY HH:mm:ss") + (globalName ? ` [${globalName}]` : '') + ':');
    console.trace.apply(console, args);
    return this;
}


module.exports = log;
module.exports.i = log;
module.exports.e = error;
module.exports.d = warn;
module.exports.t = trace;
module.exports.error = error;
module.exports.warn = warn;
module.exports.dir = dir;
module.exports.info = info;
module.exports.setGlobalName = setGlobalName;
module.exports.c = chalk