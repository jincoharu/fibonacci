'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);
function fib(n){
if(memo.has(n)){
    return memo.get(n);
    }
const value = fib(n-1) + fib(n-2);
memo.set(n,value);
return value;
}
const length =40;
for(let i = 0; i<= length; i++){
    console.log(fib(i));
}
    //if(n === 0){
//     return 0; //0で終わる
// }else if(n === 1){
//     return 1;//1でおわる
// } 
// //return null; ０と１以外ならとりあえずnull
// //０と１以外なら足し算を実装
// return fib(n-1) + fib(n-2);
// }

// for(let i =0; i<=40; i++){
//     console.log( i + "のフィボナッチ数は"+ fib(i) +"です");
// }
// //     if(n === 0){
// //         return 0;
// //     }else if (n === 1){
// //         return 1;
// //     }
// //     return null;
// //     //console.log(fib(n))
// // }