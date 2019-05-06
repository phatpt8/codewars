// literally this is an event loop

// browser context
while (true) { 
  const queue = getNextQueue();
  const task = queue.pop();

  execute(task);

  while (microtaskQueue.hasTasks()) {
    doMicrotask();
  }

  if (isRepaintTime()) {
    const animationTasks = animationQueue.copyTasks();
    for (const task in animationTasks) {
      executeAnimationTask(task);
    };

    repaint();
  }
}
