var x = 100, y = 0;
var arrSize = 30;
var A = new Array(arrSize);
//var B = new Array();

for(var i = 0, size = A.length; i < size; i++) {
  A[i] = Math.floor(Math.random() * (x - y));
}

max = A[0]; 
min = A[0];

for(i = 0; i < A.length; i++){
    if(A[i] > max){
        max = A[i];
    }

    if(A[i] < min){
        min = A[i];
    }
}

console.log('max=', max);
console.log('min=', min);
console.log(min, max);