let shakeThreshold = 15; // Порогова амплітуда для визначення "струшування"
let lastX = null, lastY = null, lastZ = null;

if (window.DeviceMotionEvent) {
  window.addEventListener('devicemotion', function (event) {
    let acceleration = event.accelerationIncludingGravity;

    if (!acceleration.x || !acceleration.y || !acceleration.z) return;

    if (lastX !== null && lastY !== null && lastZ !== null) {
      let deltaX = Math.abs(acceleration.x - lastX);
      let deltaY = Math.abs(acceleration.y - lastY);
      let deltaZ = Math.abs(acceleration.z - lastZ);

      if (deltaX > shakeThreshold || deltaY > shakeThreshold || deltaZ > shakeThreshold) {
        document.querySelector('.message').textContent = "Shake detected!";
        document.body.style.backgroundColor = 
          `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      }
    }

    lastX = acceleration.x;
    lastY = acceleration.y;
    lastZ = acceleration.z;
  });
} else {
  document.querySelector('.message').textContent = "Shake gestures are not supported on this device.";
}
