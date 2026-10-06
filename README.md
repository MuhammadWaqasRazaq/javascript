```javascript
//count total digits in a number 

let num = 34456898058;
let count = 0;
while(num>0){

    num = Math.floor(num/10);
    count++;

}
console.log(count);
```

```javascript
//find maximum and minumum from a array

let arr1 = [4,67,2,4,1,8,97];
let max = arr1[0]
let min = arr1[0]

for(i=1; i<arr1.length;i++){
    if(arr1[i]>max){
        max = arr1[i]
    }

    if(arr1[i]<min){
        min = arr1[i]
    }
}

console.log(`The max value is ${max} and min value is ${min}`)

//reverse number
let num = 1234;
let rev = 0
while(num>0){
    last = num % 10;
    rev = rev*10+last
    num = Math.floor(num/10)
}

console.log(rev);
````

````javascript
//palindrome or not
const num =321;
let original = num;
let last = 0
let reverse = 0;
while(original>0){

    last = original%10;
    reverse= reverse*10 +last;
    original =Math.floor( original/10)    
}
if(num === reverse){
    console.log("palindrome")
}else{
    console.log("not palindrome")
}
```