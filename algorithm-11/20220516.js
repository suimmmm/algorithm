const poketmonList = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀', '야도란', '피죤투', '또가스']
let count = 0;

// 1번 문제 -> 길이값이 총 얼마인지 프로그래밍을 통해 console 출력
while(true){
  if(count === poketmonList.length){
    break
  }
  console.log(count)
  console.log(poketmonList[count])
  count++;
}

// 2번 문제 -> 야도란 이라는 값이 몇번째 index에 있는지
for(let i =0;i<poketmonList.length;i++){
  if(poketmonList[i] === '야도란'){
    console.log(i + '번째')
  }
}

// 3번 문제 -> 야도란을 메타몽으로 변환하여 배열 전체 console 출력
for(let i =0;i<poketmonList.length;i++){
  if(poketmonList[i] === '야도란'){
    poketmonList[i] = '메타몽';
  }
}
console.log(poketmonList);

// 4번 문제 -> 리자몽을 멘 마지막 원소로 프로그래밍 통해 추가
poketmonList.push('리자몽');
console.log(poketmonList);