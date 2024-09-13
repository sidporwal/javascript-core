// Polyfill for setTimeout using requestIdleCallback
(function () {
  const timeoutIds = {};

  myClearTimeout = function (timeoutId) {
    delete timeoutIds[timeoutId];
  };

  const runTimeouts = () => {
    // console.log("runTimeouts");
    for (const [timeoutId, timeout] of Object.entries(timeoutIds)) {
      // console.log("timeoutId", timeoutId);
      if (Date.now() >= timeout.timout) {
        timeout.callback();
        myClearTimeout(timeoutId);
      }
    }
    requestIdleCallback(runTimeouts);
  };

  mySetTimeout = function (fn, delay) {
    const timeoutId = Math.random();
    timeoutIds[timeoutId] = {
      callback: fn,
      timout: Date.now() + delay,
    };
    return timeoutId;
  };

  requestIdleCallback(runTimeouts);
})();

mySetTimeout(() => {
  console.log("Hello");
}, 1000);

console.log("World");
