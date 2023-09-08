
// concat

let arr1 = ['a','b','c','d','e'];

let arr2 = ['1','2','3','4','5'];

console.log(arr1.concat(arr2));

//join

console.log("-------------------------Join---------------------------------");

let str = arr1.join('+');
console.log(str);


//push()

console.log("-------------------------push---------------------------------");


let str1 = arr1.push("g");
console.log("return from the push",str1);
console.log("return before push",arr1);


//pop()

console.log("-------------------------pop---------------------------------");

let elem = arr1.pop();
console.log("return from pop",elem);
console.log("array after pop", arr1);

//shift()

console.log("-------------------------Shift---------------------------------");

let karki = ['1','2','3','4','5'];
let roji= karki.shift();
console.log(roji);

//unshift()

console.log("-------------------------unshift---------------------------------");

let rojina= karki.unshift('i');
console.log(rojina);
console.log(karki);