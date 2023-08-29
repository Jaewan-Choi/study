// 일급객체로서의 함수
const person = {
    name: 'John',
    age: 31,
    isMarried: true,
    // sayHello: function () {
    //     console.log('Hello, My name is ' + this.name) // this는 person을 의미한다
    //     console.log(`Hello, My name is ${this.name}`) // 탬플릿 리터럴을 이용
    // }
    // 화살표함수를 이용하면
    sayHello: () => {
        console.log(`Hello, My name is ${this.name}`)
    } // this가 undefined로 나온다 (화살표함수는 this를 바인딩하지 않는다)
}
person.sayHello()