const fs = require("fs");

function writeToFile(data, filePath) {
    fs.readFile(filePath, "utf8", (e, d) => {
        if (e) {
            console.log(`Error reading file ${filePath}: ${e}`);
            return false
        } else {
            let _data
            _data = JSON.parse(d)
            _data.push(data);

            fs.writeFile(filePath, JSON.stringify(_data), "utf8", (e) => {
                if (e) {
                    console.log(`Error writing file ${filePath}: ${e}`);
                    return false
                } else {
                    console.log(`Success writing file ${filePath}`);
                    return true
                }
            });
        }
    });
}

module.exports = { writeToFile };
