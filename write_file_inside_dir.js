var fs = require('fs');
var path = 'tmp/test';
fs.mkdir(path, function (err) {
    if (err) {
        console.log('failed to create directory', err);
    } else {
        fs.writeFile(path + "/mytemp", "myData", function(err) {
            if (err) {
                console.log('error writing file', err);
            } else {
                console.log('writing file succeeded');
            }
        });
    }
});