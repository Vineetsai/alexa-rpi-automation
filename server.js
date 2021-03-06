const wemore = new require('wemore');
var gpiop = require('rpi-gpio');

// Each emulator need unique port
const garage = wemore.Emulate({friendlyName: "Garage", port: 9000}); // if not provided, port automatically assigned
const light = wemore.Emulate({friendlyName: "Light", port: 9001}); // if not provided, port automatically assigned
gpiop.setup(7, gpiop.DIR_OUT,() => {
    gpiop.write(7, false, function(err) {});
});
gpiop.setup(11, gpiop.DIR_OUT, () => {
    gpiop.write(11, false, function(err) {});
});

garage.on('listening', function() {
    console.log("Garage listening on", this.port);
});
light.on('listening', function() {
    console.log("Light listening on", this.port);
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

// -=-= Light-=-=
light.on('on', function(self, sender) {
    const cmd= 'OPEN';
    gpiop.write(11, true, function(err) {
        if (err) {
            console.log(`${cmd} - failed to set pin on with error: ${err}`);
        } else {
            console.log('Light is On');
        }
    });
});

light.on('off', function(self, sender) {
    const cmd= 'CLOSE';
    gpiop.write(11, false, function(err) {
        if (err) {
            console.log(`${cmd} - failed to set pin on with error: ${err}`);
        } else {
            console.log('Light is Off');
        }

    });
});
