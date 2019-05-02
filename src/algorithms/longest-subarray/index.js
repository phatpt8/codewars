inputSpecial1 = [0,0,0,0,0,0];
inputSpecial = [1, 1, 1, 1, 1, 1];
inputArray = [3, 1, 2, 1];
inputK = 4;
sample = [
  61,
74,
659,
931,
273,
545,
879,
924,
710,
441,
166,
493,
43,
988,
504,
328,
730,
841,
613,
304,
170,
710,
158,
561,
934,
100,
279,
817,
336,
98,
827,
513,
268,
811,
634,
980,
150,
580,
822,
968,
673,
394,
337,
486,
746,
229,
92,
195,
358,
2,
154,
709,
945,
669,
491,
125,
197,
531,
904,
723,
667,
550,
]
k = 22337;

sample1 = [
  4,
3,
1,
2,
1,
];
kk = 4;

function maxLength(arr, k) {
  var len = arr.length;
  var maxLen = 0;
  
  a: for (var i = 0; i < len; i++) {
    var number = arr[i];

    if (number >= k) {
      continue;
    }

    var sum = number;
    
    for (var j = i + 1; j < len; j++) {
      var nextNumber = arr[j];
      
      if (sum + nextNumber <= k) {
        sum += nextNumber;
      } else {
        if (j - i > maxLen) {
          maxLen = j - i;
        }
        continue a;
      }
    }
  }
  
  return maxLen;
}

console.log(maxLength(sample1, kk));