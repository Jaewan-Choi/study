// 명시적 this binding - call, apply, bind

var func = function (a, b, c) {
    console.log(this, a, b, c)
}

// no binding
// func(1, 2, 3)

// 명시적 binding - call
// func.call({x: 1}, 4, 5, 6)

// 명시적 binding - apply
func.apply({x: 1}, [4, 5, 6])

// call과 apply는 완전히 동일한 역할을 하는 즉시 실행하는 메서드다