// Polyfill for promise
(function () {
  const PENDING = "PENDING";
  const FULFILLED = "FULFILLED";
  const REJECTED = "REJECTED";

  function MyPromise(executor) {
    this.state = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback());
      }
    };

    const reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => callback());
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  MyPromise.prototype.then = function (onFulfilled, onRejected) {
    const promise = new MyPromise((resolve, reject) => {
      if (this.state === FULFILLED) {
        try {
          const value = onFulfilled(this.value);
          resolve(value);
        } catch (error) {
          reject(error);
        }
      }

      if (this.state === REJECTED) {
        try {
          const value = onRejected(this.reason);
          resolve(value);
        } catch (error) {
          reject(error);
        }
      }

      if (this.state === PENDING) {
        this.onFulfilledCallbacks.push(() => {
          try {
            const value = onFulfilled(this.value);
            resolve(value);
          } catch (error) {
            reject(error);
          }
        });

        this.onRejectedCallbacks.push(() => {
          try {
            const value = onRejected(this.reason);
            resolve(value);
          } catch (error) {
            reject(error);
          }
        });
      }
    });

    return promise;
  };

  MyPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
  };

  MyPromise.prototype.finally = function (onFinally) {
    return this.then(onFinally, onFinally);
  };
})();
