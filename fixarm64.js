#!/usr/bin/env node

var os = require("os");
var fs = require("fs");

if (os.arch() === "arm64" ) {
    if (!fs.existsSync('../../@tensorflow/tfjs-node/scripts/custom-binary.json')) {
        console.log("The custom-binary.json doesn't exist.");
        fs.copyFileSync('./custom-binary.json','../../@tensorflow/tfjs-node/scripts/custom-binary.json');
        console.log("The custom-binary.json was copied.");
	console.log("Please npm install again at node_modules/@tensorflow/tfjs-node.");
    } else {
	console.log("The custom-binary.json exists.");
    }
}
