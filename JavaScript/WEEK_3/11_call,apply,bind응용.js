// 학생과 직원 객체를 만드는 코드
function Student(name, gender, school) {
    this.name = name
    this.gender = gender;
    this.school = school;
}
function Emplyee(name, gender, company) {
    this.name = name
    this.gender = gender;
    this.company = company;
}
var kd = new Student('길동', 'male', '서울대')
var ks = new Emplyee('길순', 'female', '삼성')

// 위 코드를 좀 더 간략하게 바꿀 수 있다
function Person(name, gender) {
    this.name = name
    this.gender = gender;
}
function Student(name, gender, school) {
    Person.call(this, name, gender)
    this.school = school;
}
function Emplyee(name, gender, company) {
    Person.call(this, name, gender)
    this.company = company;
}
var kd = new Student('길동', 'male', '서울대')
var ks = new Emplyee('길순', 'female', '삼성')