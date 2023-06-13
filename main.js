#!/usr/bin/env node

let inArr = process.argv.slice(2),
    cmd = inArr[0]
    helpObj = require("./commands/help")
    orgObj = require("./commands/organize")
    treeObj = require("./commands/tree")
    types = {
        Videos: ["mp4", "mkv"],
        Archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'xz'],
        Documents: ['docx', 'doc', 'pdf', 'odt', 'ppt', 'xlsx', 'xls', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
        Applications: ['exe', 'dmg', 'pkg', 'deb'],
        Images: ['jpg', 'jpeg', 'png', 'gif', 'raw'],
        Audios: ['mp3', 'aac', 'flac', 'ogg', 'wav', 'm4a', 'wma']
    };

switch (cmd) {
    case 'tree':
        treeObj.treeKey(inArr[1]);
        break;
    case 'organize':
        orgObj.orgKey(inArr[1]);
        break;
    case 'help':
        helpObj.helpKey();
        break;
    default:
        console.log("Please enter a valid command");
        break;
}