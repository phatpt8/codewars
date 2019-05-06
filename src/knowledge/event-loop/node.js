// literally this is an event loop

// node context
while (tasksAreWaiting()) {
  const queue = getNextQueue();

  while (queue.hasTasks()) {
    const task = queue.pop();

    execute(task);

    while (nextTickQueue.hasTasks()) {
      doNextTickTask();
    }

    while (promiseQueue.hasTasks()) {
      doPromiseTask();
    }
  }
}
