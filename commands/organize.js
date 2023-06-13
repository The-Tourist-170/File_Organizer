let fs = require("fs")
    path = require("path");

function orgFn(dirPath) {
    let destPath;
    if (dirPath == undefined) {
        destPath = process.cwd();
        return;
    } else {
        let doesEx = fs.existsSync(dirPath);
        if (doesEx) {
            destPath = path.join(dirPath, "Organized_Files");
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);
            }
        } else {
            console.log("Enter the correct path.");
            return;
        }
    }
    orgHelper(dirPath, destPath);
}

function getCat(name) {
    let ext = path.extname(name)
        .slice(1);
    for (let type in types) {
        let catType = types[type];
        for (let j = 0; j < catType.length; j++) {
            if (ext == catType[j]) {
                return type;
            }
        }
    }
    return "Others";
}

function orgHelper(src, dest) {
    let childNames = fs.readdirSync(src);
    for (let i = 0; i < childNames.length; i++) {
        let childAdd = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAdd).isFile();
        if (isFile) {
            let cat = getCat(childNames[i]);
            sendFiles(childAdd, dest, cat);
        }
    }
}

function sendFiles(srcFilePath, dest, cat){
    let catPath = path.join(dest, cat);
    if(fs.existsSync(catPath) == false){
        fs.mkdirSync(catPath);
    }
    let fName = path.basename(srcFilePath);
    let destFilePath = path.join(catPath, fName);
    fs.copyFileSync(srcFilePath, destFilePath);
    //fs.unlinkSync(srcFilePath);
    console.log(fName, " copied to ==> ", cat);
}

module.exports = {
    orgKey: orgFn
};