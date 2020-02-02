# Form Validator
Form validator is a hybrid application for handwritten form validations.

## Softwares required to be installed
* GIT
* Node JS
* Code Editor (Visual Studio Code or similar)
* Android SDK (for android) / MAC with iOS SDK (for iPhone)

## Steps
* Clone the repository using `git clone`
* Run command `npm i`. This will install required dependencies
* Run command `npm install ionic -g`. This will install _ionic_ globally
* To start application locally, run `ionic serve`. This will start the application on the browser. Note that device capabilities (camera etc.) will not be available in this mode.
* To build the application for _android_, run `ionic cordova build android`. This command will generate .apk file at _platforms\android\app\build\outputs\apk\debug\app-debug.apk_ location.
* Copy the file on _android_ device and install the application. Note that you may have to enable sideloading on the device.

## Debugging on Device
* Connect the device and computer using USB cable
* Enable USB debugging on the device. Make sure the device is connected in _USB Debugging_ mode
* Run the application on device
* Open chrome browser on the computer and navigate to `chrome://inspect/#devices`
* Locate the application in the list displayed on above page and use _chrome dev tools_ for debugging

