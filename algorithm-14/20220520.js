const arr = [ "a", "b", "c"];

// function arrChange(ele, start){
//   if(start === 0){
//     let changeEle = ele.splice(start, 1)
//     let remainA = ele.splice(start+1 , 4);
//     let remainB = ele.splice(start-1,1);
//     remainB.push(remainA[0])
//     remainB.push(changeEle[0])
//     console.log(remainB)
//   }
//   else if(start === 1){
//     let changeEle = ele.splice(start, 1)
//     let remainA = ele.splice(start, 1);
//     let remainB = ele.splice(start-1,1);
//     remainA.push(remainB[0])
//     remainA.push(changeEle[0])
//     console.log(remainA)
//   }
//   else if(start === 2){
//     let changeEle = ele.splice(start, 1)
//     let remainA = ele.splice(start-start, 1);
//     let remainB = ele.splice(start-start,1);
//     remainA.push(remainB[0])
//     remainA.push(changeEle[0])
//     console.log(remainA)
//   }
// }
// arrChange(arr, 2);

// function arrSort(ele, name){
//   let findArr = arr.includes(name);
//   if(findArr){

//   }
//   else{
//     console.error('!')
//   }
// }
// arrSort(arr, 'd');

// arr.push(arr[0])
// arr.shift()
// console.log(arr)

// 주선자
let tmp;
tmp = arr[0];
console.log(tmp);
arr.shift();
console.log(arr)
arr.push(tmp);
console.log(arr)


