// 이런 패턴은 어떨까?
// 얕은 복사 패턴
var copyObject = function (target) {
    var result = {}

    // for ~ in 구문을 이용하여, 객체의 모든 프로퍼티에 접근할 수 있음
    // 하드 코딩을 하지 않아도 괜찮음
    // 이 copyObject로 복사를 한 다음, 복사를 완료한 객체의 프로퍼티를 변경하면 됨
    for (var prop in target) {
        result[prop] = target[prop]
    }
    return result
}

// 위 패턴을 앞선 예제에 적용
var user = {
    name: 'wonjang',
    gneder: 'male'
}

var user2 = copyObject(user)
user2.name = 'twojang'

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.')
}

console.log(user.name, user2.name)
console.log(user === user2)

// 하지만 얕은 복사 패턴도 아래와 같은 중첩된 객체에 대해서는 완벽한 복사를 할 수 없는 단점이 존재한다
// var user = {
//     name: 'wonjang',
//     urls: {
//         portfolio: 'http://github.com/abc',
//         blog: 'http://blog.com',
//         facebook: 'http://facebook.com/abc',
//     }
// };

// 이러한 문제를 해결하기위한 방법으로 깊은 복사(재귀적 수행)이 있다