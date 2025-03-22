let a //--> undefined
let number = 12;  //--> primitive
let float = 12.2; //-->primitive
let bool = true;
let array = [];   //--> reference
let boolean = false;
let nll = null;
let undefine = undefined;
let str = "12";
let fn = function () { }; //--> reference

/*Primitive values*/

let x = 12;
y = x;
y += 2;
// console.log(x, y);

/*Reference to arrays*/

// let arr = [1, 2, 3, 4, 5, 6];
// let brr = arr;

// console.log(brr)

// brr.pop()

// console.log(arr , brr)

// brr[0] = 22

// console.log(arr , brr)

/* Copy values of arrays*/

let arr = [1, 2, 3, 4, 5, 6];
let crr = [7 , 8 , 9 ];
let brr = [...arr , ...crr];

// console.log(brr);

brr.pop()
console.log(arr, brr , crr)
