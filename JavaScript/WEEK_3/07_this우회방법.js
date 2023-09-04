var obj1 = {
    outer: function () {
        console.log(this); // (1)
        var innerFunc = function () {
            console.log(this); // (2), (3)
        }
        innerFunc();

        var obj2 = {
            innerMethod: innerFunc
        };
        obj2.innerMethod();
    }
};
obj1.outer();


var obj1 = {
    outer: function () {
        console.log(this); // (1) outer

        // AS-IS (이전)
        var innerFunc1 = function () {
            console.log(this); // (2) 전역객체
        }
        innerFunc1();

        // TO-BE (이후)
        var self = this;
        var innerFunc2 = function () {
            console.log(self); // (3) outer
        };
        innerFunc2();
    }
};

// 메서드 호출 부분
obj1.outer();