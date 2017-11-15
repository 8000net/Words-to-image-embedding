let glob = require("glob");
let fs = require("fs");

glob("../data/annotations/*", {}, (err, files) => {
	json_items = files.map(fname => {
					try {
					let data = require(fname);
					fs.writeFile("transformed."+fname, JSON.stringify(data), (err) => {
						if(err) {
							console.log("ERROR PROCESSING FILE " + fname);
						} else {
							console.log("Successfully wrote file " + fname);
						}
					});
					}
					catch(e) {
						console.log("ERROR PROCESSING FILE " + fname);
					}
	});
});
