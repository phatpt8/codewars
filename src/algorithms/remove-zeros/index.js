// const input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
const input = [1,null,"5","2",8,6,null,false,"0",0];

function removeZeros(array) {
  var end = array.length;
  for (var i = 0; i < end; i++) {
      if (array[i] === 0 || array[i] === "0") {
          arrayShiftToEnd(array, i);
          i--;
          end--;
      }
  }
  return array;
}

function arrayShiftToEnd(array, n) {
  var end = array[n]
  for(var i = n; i <  array.length; i++) {
      array[i] = array[i + 1]
  }
  array[array.length - 1] = end;

  return array
}

removeZeros(input);

// function removeZeros(arr) {
//   for (var i = 0, s = false, c = 0; i < arr.length - 1; i++)
//       ("" + arr[i] == "0" && "" + arr[i + 1] != "0") &&
//       (c=arr[i], arr[i]=arr[i + 1], arr[i + 1]=c, i = 0, s = true);
//   return !s ?arr :removeZeros(arr);
// }