// user 객체를 생성
var user = {
    name: 'wonjang',
    gender: 'male',
}

// 이름을 변경하는 함수, 'changeName'을 정의
// 입력값 : 변경대상 user 객체, 변경하고자 하는 이름
// 출력값 : 새로운 user 객체
// 특징 : 객체의 프로퍼티(속성)에 접근하지않고, 아예 새로운 객체를 반환 - > 불변
var changeName = function (user, newName) {
    return {
        name: newName,
        gender: user.gender,
    }
}

// 변경한 user정보를 user2 변수에 할당
// 불변이기 때문에 user1은 영향이 없음
var user2 = changeName(user, 'twojang')

// 결국 아래 로직은 수행됨
if (user !== user2) {
    console.log('유저 정보가 변경되었습니다')
}

console.log(user.name, user2.name) // onejang twojang
console.log(user === user2) // false

// 가변객체와 다르게 원하는 결과를 얻을 수 있다
// 다만 단점으로는 객체아래 속성이 많을 경우 하드코딩이 필요하게된다