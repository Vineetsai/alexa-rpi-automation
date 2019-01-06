
var gpiop = require('rpi-gpio');
const RELAY1 = 36;
const RELAY2 = 38;
const RELAY3 = 40;

gpiop.setup(RELAY1, gpiop.DIR_OUT,(ierr) => {
	// process.exit(1);
	if (ierr) {
		console.log(`Failed to set pin 7 ${ierr}`);
		process.exit(1);
	}
	 // gpiop.write(7, true, function(err) {});

	for (let i = 0; i< 10; i++) {
		setTimeout(() => {
		     console.log(`${i}  ${i%2} -- setting pin to ${i%2 ? true : false}`);
		     gpiop.write(RELAY1, i%2 ? true : false, function(err) { 
			    if (err) console.log(`Error to set pin: ${err.toString()}`)
		     });
		}, i*1000);
	}
});

gpiop.setup(RELAY2, gpiop.DIR_OUT,(ierr) => {

	    if (ierr) {
		            console.log(`Failed to set pin 7 ${ierr}`);
		            process.exit(1);
		        }
	    for (let i = 0; i< 10; i++) {
		            setTimeout(() => {
				                console.log(`${i}  ${i%2} -- setting pin to ${i%2 ? true : false}`);
				                gpiop.write(RELAY2, i%2 ? true : false, function(err) {
							                if (err) console.log(`Error to set pin: ${err.toString()}`)
							            });
				            }, i*1000 + 200);
		        }
});
gpiop.setup(RELAY3, gpiop.DIR_OUT,(ierr) => {
	    if (ierr) {
		            console.log(`Failed to set pin 7 ${ierr}`);
		            process.exit(1);
		        }
	    for (let i = 0; i< 10; i++) {
		            setTimeout(() => {
				                console.log(`${i}  ${i%2} -- setting pin to ${i%2 ? true : false}`);
				                gpiop.write(RELAY3, i%2 ? true : false, function(err) {
							                if (err) console.log(`Error to set pin: ${err.toString()}`)
							            });
				            }, i*1000 + 700);
		        }
});
