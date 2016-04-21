Detect Browser JS
====

Overview

## Description
You can know what is this browser.
It uses unique object, which each browser has, for detecting browser.
For example, The Chrome browser has an object named 'chrome', so this library can know if it is either chrome or not by using this object.
It can detect browser below.

* IE6-11
* Edge
* Opera 8.0+
* Firefox 1.0+
* Safari 3+
* Chrome 1+

If the browser is IE, it can detect IE version and the browser was simulated.

If the browser is Chrome, it can detect if Chrome uses either Blink as rendering engine or not.

## Demo
[Demo](http://kim-yongjin.github.io/detect-browser-js/detect-browser-js-test.html)

## Requirement
There is no requirement.
It was wrote by pure javascript.

## Usage
It has a some properties and methods below.

* detectBrowser.isIE: it returns boolean.
* detectBrowser.ieVersion: it returns IE version if browser is IE.
* detectBrowser.isEmulatedIE: it returns boolean if browser is IE.
* detectBrowser.isEdge: it returns boolean.
* detectBrowser.isOpera: it returns boolean.
* detectBrowser.isFirefox: it returns boolean.
* detectBrowser.isSafari: it returns boolean.
* detectBrowser.isChrome: it returns boolean.
* detectBrowser.isBlink: it returns boolean if browser is Chrome.
* detectBrowser.isMobileOrTablet: it returns boolean if device is mobile or tablet. In example, it returns false if the device is TV.
* detectBrowser.getName(): it returns browser name.
* detectBrowser.getBrowserInfo(): it returns complex information.

## Licence
[MIT](http://opensource.org/licenses/mit-license.php)

Copyright (c) 2016 YongJin Kim

Released under the MIT license

http://opensource.org/licenses/mit-license.php

## Author

[YongJin Kim](https://github.com/Kim-YongJin)
