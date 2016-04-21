# Detect Browser JS

'Detect Browser JS' is a browser detector which detects each browser by a unique object it contains.

For example, The Chrome browser has an object named 'chrome', so this library can know if it is either chrome or not by using this object.

Detectable browser.

* IE 6-11
* Edge
* Opera 8.0+
* Firefox 1.0+
* Safari 3+
* Chrome 1+

If the browser is IE, it can detect IE version and if the browser was simulated.

If the browser is Chrome, it can detect if Chrome uses either Blink as rendering engine or not.

## Installation
```
$ bower install detect-browser-js
```

## Demo
[Demo](http://kim-yongjin.github.io/detect-browser-js/detect-browser-js-test.html)

## Requirement
There is no requirement.
It was written in pure javascript.

## Reference
#### Properties

* `isIE`: returns boolean.
* `ieVersion`: returns IE version if browser is IE.
* `isEmulatedIE`: returns boolean if browser is IE emulated.
* `isEdge`: returns boolean.
* `isOpera`: returns boolean.
* `isFirefox`: returns boolean.
* `isSafari`: returns boolean.
* `isChrome`: returns boolean.
* `isBlink`: returns boolean if browser is Chrome.
* `isMobileOrTablet`: returns boolean if device is mobile or tablet. In example, it returns false if the device is TV.

#### Methods
* `getName()`: returns browser name.
* `getBrowserInfo()`: returns complex information.

## Licence
[MIT](http://opensource.org/licenses/mit-license.php)

Copyright (c) 2016 YongJin Kim

Released under the MIT license

http://opensource.org/licenses/mit-license.php

## Author

[YongJin Kim](https://github.com/Kim-YongJin)
