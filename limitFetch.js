class limitFetch {
  constructor(limit) {
    this.limit = limit;
    this.queue = [];
    this.requesting = 0;
  }

  async fetch(promise) {
    if (this.requesting >= this.limit) {
      await new Promise((resolve) => {
        this.queue.push(resolve);
      });
    }
    this.requesting++;
    const response = await promise();
    this.requesting--;
    if (this.queue.length > 0) {
      const next = this.queue.shift();
      next();
    }
    return response;
  }
}

const limit = new limitFetch(3);

limit
  .fetch(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 2000);
    });
  })
  .then((response) => {
    console.log(response);
  });

limit
  .fetch(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, 2000);
    });
  })
  .then((response) => {
    console.log(response);
  });

limit
  .fetch(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(3);
      }, 2000);
    });
  })
  .then((response) => {
    console.log(response);
  });

limit
  .fetch(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(4);
      }, 2000);
    });
  })
  .then((response) => {
    console.log(response);
  });

limit
  .fetch(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(5);
      }, 2000);
    });
  })
  .then((response) => {
    console.log(response);
  });
