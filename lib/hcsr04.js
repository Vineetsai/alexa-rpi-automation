
const Q = require('q');
const gpio = require('rpi-gpio').promise;
const debug = true;

class HCSR04 {
    constructor(trigger, echo) {
        this.triggerPin = trigger;
        this.echo = echo;
    }

    init(callback) {
        const self = this;
        var riseTime = 0;

        gpio.setup(11, gpio.out)
            .then(() => gpio.setup(trigger, gpio.DIR_OUT))
            .then(() => gpio.setup(echo, gpip.DIR_IN))
            .then(() => gpio.write(this.triggerPin, false))
            .then(() => {
                // check for Echo: rising edge
                setWatch(function(e) {
                    riseTime=e.time;
                }, this.echo, { repeat:true, edge:'rising'  });

                // check for Echo: falling edge
                setWatch(function(e) {
                    callback(((e.time-riseTime)*1000000)/57.0);
                }, this.echo, { repeat:true, edge:'falling' });
                return {
                    trigger : function() {digitalPulse(self.triggerPin, 1, 0.01/*10uS*/);}
                };
            });
    }
}

const hcsr = new HCSR04(36,38);

let hcsr04;
hcsr.init(function(result) {
    // var distanceInch = (result * 0.39370).toFixed(2);
    result = result.toFixed(2);
    if (debug) console.log(result + " cm away");
    if (result > 20) {
        gpio.write(11, false, () => {});
    } else {
        gpio.write(11, true, () => {});
    }
})
    .then((trigger) => {
        setInterval(trigger(), 2000)
    });

// setInterval(function () {
//         hcsr04.triggerPin();
//         }, 2000);
