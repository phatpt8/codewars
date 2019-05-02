
JavAss script

====================================================

console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');


In what order should the logs appear?
https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

====================================================

