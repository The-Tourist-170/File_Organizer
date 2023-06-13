let fs = require("fs")
    path = require("path");

function treeFn(dirPath) {
    if (dirPath == undefined) {
        treeHelper(process.cwd(), "");
        return;
    } else {
        let doesEx = fs.existsSync(dirPath);
        if (doesEx) {
            treeHelper(dirPath, "");      
        } else {
            console.log("Enter the correct path.");
            return;
        }
    }
}

function treeHelper(dirPath, indent){
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile){
        let cName = path.basename(dirPath);
        console.log(indent + "┃⟶  " + cName);
    }else{
        let dName = path.basename(dirPath);
        console.log(indent + "╹⟶  " + dName);
        let cFiles = fs.readdirSync(dirPath);
        for(let i = 0; i < cFiles.length; i++){
            let cPath = path.join(dirPath, cFiles[i]);
            treeHelper(cPath, indent + "\t");
        }
    }
}

module.exports = {
    treeKey: treeFn
};