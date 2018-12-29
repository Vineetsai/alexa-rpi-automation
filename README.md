# alexa-rpi-automation

## Setup
get dependencies

```npm install ```

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

