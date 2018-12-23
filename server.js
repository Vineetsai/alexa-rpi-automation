const wemore = new require('wemore');
var gpio = require('rpi-gpio');

const garage = wemore.Emulate({friendlyName: "Garage", port: 9003}); // automatically assigned
gpiop.setup(7, gpio.DIR_OUT);

garage.on('listening', function() {
    // if you want it, you can get it:
    console.log("Stereo listening on", this.port);
});

garage.on('on', function(self, sender) {
    gpiop.write(7, true, function(err) {
        if (err) {
            console.log(`failed to turn on with error: ${err}`);
        }
    });
    console.log("garage turned on");
});

garage.on('off', function(self, sender) {
    gpiop.write(7, false, function(err) {
        if (err) {
            console.log(`failed to turn off with error: ${err}`);
        }
    });
    console.log("garage turned off");
});