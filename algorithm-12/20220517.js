const dummyText = ["Lorem", "Ipsum", "is", "simply", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It", "was", "popularised", "in", "the", "1960s", "with", "the", "release", "of", "Letraset", "sheets", "containing", "Lorem", "Ipsum", "passages", "and", "more", "recently", "with", "desktop", "publishing", "software", "like", "Aldus", "PageMaker", "including", "versions", "of", "Lorem", "Ipsum.","been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "dummy", "text", "of", "the", "printing", "and", "typesetting", "industry.", "Lorem", "Ipsum", "has", "been", "the", "industry's", "standard", "dummy", "text", "ever", "since", "the", "1500s,", "when", "an", "unknown", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "printer", "took", "a", "galley", "of", "type", "and", "scrambled", "it", "to", "make", "a", "type", "specimen", "book.", "It", "has", "survived", "not", "only", "five", "centuries", "but", "also", "the", "leap", "into", "electronic", "typesetting,", "remaining", "essentially", "unchanged.", "It"];

// 1번 문제 -> of 라는 문자열이 몇번 나오는지 console에 출력
// let a = 1;
// for(let i of dummyText){
//   if(i.indexOf('of') === 0){
//     a++;
//   }
// }
// console.log(a)
// 2번 문제 -> dummy 라는 문자열 원소 모두 sementic 이라는 단어로 바꾸기
// for(let i =0; i < dummyText.length; i++){
//   if(dummyText[i] === 'dummy'){
//     dummyText.splice(i, 1 , 'sementic')
//   }
// }
// let mapping = dummyText.map(function(value){
//   if(value === 'dummy'){
//     value = 'sementic'
//   }
// })
// console.log(dummyText)
// 3번 문제 -> the 라는 원소 다음 web 이라는 단어 추가되도록 배열 조정
// for(let i =0; i < dummyText.length; i++){
//   if(dummyText[i] === 'the'){
//     dummyText.splice(i+1, 0 , 'work')
//   }
// }
// dummyText.forEach((value, index)=>{if(value === 'the'){dummyText[index+1] = 'web'}})
// console.log(dummyText)
// 4번 문제 -> 배열 속 원소들의 총 글자 갯수 console
// let d = 0;
// for(let i=0; i<dummyText.length; i++){
//   for(let j=0; j < dummyText[i].length; j++){
//     d++;
//   }
// }
// let d = dummyText.reduce((before, current)=>{
//   return before + current;
// })
// console.log(d.length)