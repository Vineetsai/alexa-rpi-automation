const HSCR04 = require('../lib/HSCR04');

// 13/26 or 5/6 GPIO
const hscsr04 = new HSCR04(13, 26);
hscsr04.measureDistance(1000);
