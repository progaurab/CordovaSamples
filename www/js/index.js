document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    cordova.InAppBrowser.open('http://androidabcd.info', '_blank', 'location=no, zoom=no, toolbar=no');
}