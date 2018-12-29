# alexa-rpi-automation

## Setup
get dependencies

```
npm install
```
Add to the end of the ~/.profile
```$xslt
export PATH=$PATH:/opt/nodejs/bin
export PATH=$PATH:/usr/local/lib/node_modules
```

## Start service
```npm start```

## Prepare
Connect Rpi/Device and Alexa, and get devices discovered by Alexa. Alexa usually scan for 20 seconds to discover devices, and with in that time it able to discover 10-12 devices, in case you want to have more devices you need to rediscover for more devices.

### RPi/Device
- Make sure RPi/Device is connected to same local network as Alexa through wifi or ethernet
#### Services
- Garage: Rpi physical pin 7 (GPIO 04) ------ Relay---- Garage Controller pins
- Light: Rpi physical pin 11 (GPIO 17)--------Relay --- light/Lamp

### Alexa
- Alexa need to be connected to local Wifi, make sure its on same network as Rpi Devices are connected to. This would allow Alexa to discover Rpi/Device on same network. 
##### Add devices with Alexa
- Tell Alexa to "Alexa Discover Devices"

## Configure to auto-run on boot, also recover in case service fail.
Run these set of commands only first time, this will setup service to auto start on reboot.
```$xslt
npm install -g pm2
cd <to service folder>
pm2 start server.js --name HomeAutomationAlexa
pm2 startup
```

To check status for the service
```
pm2 list
```
To stop service
```$xslt
pm2 stop HomeAutomationAlexa
```
To manually start again
```$xslt
pm2 start server.js --name HomeAutomationAlexa
```

