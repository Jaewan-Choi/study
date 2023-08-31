// 2주차 강의자료
// https://teamsparta.notion.site/JS-2-es6-Map-Set-37ea730f9e794e25be0012517d950006

// ES6

// 2015년도 이전 => var
// (1) es6 => let(변수), const(상수)

// (2) arrow function
function add () {}

var add = function () {}

var add = (x) => {
    return 1
}

var add = x => 1

// (3) 삼항 연산자
// condition ? true인 경우 : false인 경우

console.log(true ? '참' : '거짓') // 참
console.log(false ? '참' : '거짓') // 거짓
console.log(1 === 1 ? '참' : '거짓') // 참
console.log(1 !== 1 ? '참' : '거짓') // 거짓