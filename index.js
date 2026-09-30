const fs = require('node:fs');
const path = require('path');

const replaceThis = "old";
const replaceWith = "new"

const preview = true;

const folder = path.join(__dirname, "data");
//const folder = __dirname;

try {
    const data = fs.readdir(folder, (err, data) => {

        for (let index = 0; index < data.length; index++) {
            const item = data[index];

            let oldFile = path.join(folder, item);
            let newFile =  path.join(folder, item.replaceAll(replaceThis, replaceWith));
            
            if (!preview) {

                fs.rename(oldFile , newFile, () => {
                    console.log("Rename files Successfully.")
                });

            }
            else{
            
                if(oldFile !== newFile )console.log(oldFile + " this will renamed to " + newFile);
            }

        }

    });

} catch (err) {
    console.error(err);
}