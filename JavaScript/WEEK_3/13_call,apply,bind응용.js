// bind 메서드 -> this를 바인딩 하는 메서드
// call, apply와는 좀 다르다! 즉시 혹출하지 않음.

// [목적]
// 1. 함수에 this를 '미리' 적용
// 2. 부분 적용 함수!

var func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
};
func(1, 2, 3, 4); // global 객체

// 함수에 this 미리 적용
var bindFunc1 = func.bind({ x: 1 }); // 바로 호출되지는 않아요! 그 외에는 같아요.
bindFunc1(5, 6, 7, 8); // { x: 1 } 5 6 7 8

// 부분 적용 함수 구현
var bindFunc2 = func.bind({ x: 1 }, 4, 5); // 4와 5를 미리 적용
bindFunc2(6, 7); // { x: 1 } 4 5 6 7
bindFunc2(8, 9); // { x: 1 } 4 5 8 9


// name 프로퍼티!!
console.log(func.name)
console.log(bindFunc1.name)
console.log(bindFunc2.name)
// 'bound'라는 접두어! (바인드가 되었다)
// 추적하기가 매우 쉽다