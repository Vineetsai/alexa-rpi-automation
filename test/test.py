#!/usr/bin/env python

import time

import RPi.GPIO as GPIO


GPIO.setmode(GPIO.BCM)
GPIO.setup(13, GPIO.OUT)
GPIO.output(13, GPIO.LOW)

time.sleep(2.25)

GPIO.output(13, GPIO.HIGH)
GPIO.cleanup()
