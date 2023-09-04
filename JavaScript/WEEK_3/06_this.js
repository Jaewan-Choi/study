// 런타임(run + time) : 코드가 돌아가는 그 환경(시간)
// 전역 환경에서 this는 -> 노드(global 객체), 브라우저(window 객체)

// 함수 : this -> 전역 객체
// 메서드 : this -> 호출의 주체

// CASE1 : 함수
// 호출 주체를 명시할 수 없기 때문에 this는 전역 객체를 의미해요.
var func = function (x) {
    console.log(this, x);
};
func(1); // global { ... } 1 (브라우저에선 window 객체가 나옴)

// CASE2 : 메서드
// 호출 주체를 명시할 수 있기 때문에 this는 해당 객체(obj)를 의미해요.
// obj는 곧 { method: f }를 의미하죠?
var obj = {
    method: func,
};
obj.method(2); // { method: f } 2