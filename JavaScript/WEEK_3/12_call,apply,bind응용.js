// var numbers = [10, 20, 3, 16, 45]
// var max = min = numbers[0] // 10
// numbers.forEach(function(number){
//     // 현재 돌아가는 숫자가 max보다 큰 경우
//     if (number > max) {
//         max = number
//     }

//     // ~
//     if (number < min) {
//         min = number
//     }
// })
// console.log(max, min)

// 위 코드를 간략하게 바꿀 수 있다.
// var numbers = [10, 20, 3, 16, 45]
// var max = Math.max.apply(null, numbers)
// var min = Math.min.apply(null, numbers)
// console.log(max, min)

// spread operator
var numbers = [10, 20, 3, 16, 45]
console.log(numbers)
console.log(...numbers)

var max = Math.max(...numbers)
var min = Math.min(...numbers)
console.log(max, min)