const Gpio = require('pigpio').Gpio;

// The number of microseconds it takes sound to travel 1cm at 20 degrees celcius
const MICROSECDONDS_PER_CM = 1e6/34321;

const trigger1 = new Gpio(13, {mode: Gpio.OUTPUT});
const echo1 = new Gpio(26, {mode: Gpio.INPUT, alert: true});

const trigger = new Gpio(5, {mode: Gpio.OUTPUT });
const echo = new Gpio(6, { mode: Gpio.INPUT, alert: true });

trigger.digitalWrite(0); // Make sure trigger is low
trigger1.digitalWrite(0);

const watchHCSR04 = (echoPin, id) => {
  let startTick;

  echoPin.on('alert', (level, tick) => {
    if (level == 1) {
      startTick = tick;
    } else {
      const endTick = tick;
      const diff = (endTick >> 0) - (startTick >> 0); // Unsigned 32 bit arithmetic
      console.log(`pinId: ${id} -> ${diff / 2 / MICROSECDONDS_PER_CM}`);
    }
  });
};

watchHCSR04(echo, 0);
watchHCSR04(echo1, 1);
// Trigger a distance measurement once per second
setInterval(() => {
  trigger.trigger(10, 1); // Set trigger high for 10 microseconds
}, 1000);

setInterval(() => {
	trigger1.trigger(10, 1);
}, 1000);
