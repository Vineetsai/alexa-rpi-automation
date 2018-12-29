var wemore = require('wemore');

// when the friendly name is provided, a Promise is returned
wemore.Discover('Garage')
    .then(function(device) {
        return device.toggleBinaryState();
    })
    .then(function() {
        console.log("Success!");
    });