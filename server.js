const wemore = new require('wemore');
var gpio = require('rpi-gpio');

// Each emulator need unique port
const garage = wemore.Emulate({friendlyName: "Garage", port: 9004}); // if not provided, port automatically assigned
gpiop.setup(7, gpio.DIR_OUT);

garage.on('listening', function() {
    console.log("Stereo listening on", this.port);
});

garage.on('on', function(self, sender) {
    const cmd= 'OPEN';
    gpiop.write(7, true, function(err) {
        if (err) {
            console.log(`${cmd} - failed to set pin on with error: ${err}`);
        } else {
            setTimeout(function () {
                gpiop.write(7, false, function(err1){
                    if (err1) {
                        console.log(`${cmd} - failed to turn pin off: ${err1}`);
                    } else {
                        console.log('Garage Door Opened');
                    }
                });
            }, 1000);
        }
    });
});

garage.on('off', function(self, sender) {
    const cmd= 'CLOSE';
    gpiop.write(7, true, function(err) {
        if (err) {
            console.log(`${cmd} - failed to set pin on with error: ${err}`);
        } else {
            setTimeout(function () {
                gpiop.write(7, false, function(err1){
                    if (err1) {
                        console.log(`${cmd} - failed to turn pin off: ${err1}`);
                    } else {
                        console.log('Garage Door Closed');
                    }
                });
            }, 1000);
        }
    });
});