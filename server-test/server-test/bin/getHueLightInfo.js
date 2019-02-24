var HueApi = require("node-hue-api").HueApi;

var displayStatus = function(status) {
    console.log(JSON.stringify(status['state']['on']))
    //console.log(JSON.stringify(status, null, 2));
};

//var host = "192.168.0.233",
//    username = "1RDgumH03HYnN-UU8xSw28SGnml8HFiHtMN-igGS",
    var api = new HueApi(huehost, hueusername);

// Obtain the Status of Light '5'

// --------------------------
// Using a promise
/*
api.lightStatus(5)
    .then(displayStatus)
    .done();
*/
// --------------------------
// Using a callback
api.lightStatus(4, function(err, result) {
    if (err) throw err;
    displayStatus(result);
});
