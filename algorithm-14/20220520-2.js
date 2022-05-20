const pokemon = {
  a : '꼬부기',
  b : '파이리',
  c : '치코리타',
  d : '리자몽'
}

/*
for()
-> for in()
-> for of()
*/
// 첫번째 방법
// console.log(pokemon.a)
console.log(pokemon['a'])

for(let props in pokemon){
  // 키값만큼 반복해줘
  console.log(typeof props)
  // 객체의 키값은 문자열
  // 배열의 키값은 숫자
  
  console.log(pokemon[props])
  // Element.log()
}

// 배열용
// for(let i of pokemon){ 
//   console.log(i)
// }

// 객체의 키값을 접근하는 방식은 사실 두가지
// example.key : 점 표시법
// example['key'] : 대괄호 표기법
// -> 문자열로 객체의 키값을 접근하기 위해.
// -> 객체의 키값은 문자열이다.

/*
  for() : 프로그램 일반 제어문
  for(in) : js 지원하는 특수한 제어
  for(of) : js 지원하는 특수한 제어
  forEach() : 

  객체는 사실 두가지의 키 접근이 있었다.
*/
