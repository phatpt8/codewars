(function(w, d, undefined){
  w.solutions = {};
  var solution = function(name, fn, ...rest) {
    var r = fn.bind(null, ...rest);
    w.solutions[name] = r;
    return r;
  }

  var test1 = solution('test1', function(arr) {
    console.log(arr.toString());
  }, 1,2,3);

}(window, document));
