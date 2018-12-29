const wemore = new require('wemore');
var gpiop = require('rpi-gpio');

gpiop.setup(7, gpiop.DIR_OUT,() => {
    gpiop.write(7, false, function(err) {});
});
let flag = false;

for (let i = 10; i< 10; i++) {
    flag = !flag;
     setTimeout(() => {
        gpiop.write(7, flag, function(err) {});
    }, i*1000);
}