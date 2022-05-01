// 1. Hello world~
console.log("안녕 자바스크립트");

// 2. 변수와 상수
// 2-1. 변수
let age = 25;
console.log(age);

// 변수 설정 규칙
// (1) 기호를 사용할 수 없다. 기호 사용시 언더스코어(_), 달러($)만 사용 가능하다.
// (2) 숫자를 맨 처음에 사용할 수 없다. 문자 뒤에 숫자가 오는 것은 가능.
// (3) 예약어를 피해야 한다. (if, for ...)

var height = 165;
console.log(height);
// var 는 변수를 계속 선언할 수 있기 때문에 위험하다.
// let 을 사용하는 것을 권장

// 2-2. 상수
const weight = 20;
console.log(weight);

// weight = 10; -> 값을 새로 부여할 때 오류. 변하지 않는 값이라서...

// 3. 자료형과 형 변환
// Primitive Type (원시 타입) 과 Non-Primitive Type (비 원시 타입)
// Primitive Type (원시 타입)
// 한번에 하나의 값만 가질 수 있음
// 하나의 고정된 저장 공간 이용
// ex) 변수 선언

// Non-Primitive Type (비 원시 타입)
// 한번에 여러 개의 값을 가질 수 있음
// 여러 개의 고정되지 않은 동적 공간 사용
// ex) 배열

// 3-1. Primitive Type (원시 타입) 자료형
// 숫자형
let gram = 60; // 정수
let tall = 175.9; // 실수
let inf = Infinity; // 무한대
let minusInf = -Infinity; // 마이너스 무한대
let nan = NaN; // NaN

// 문자열
let name = "m-ur-phy";
let name2 = "oo";

let name3 = `m-ur-phy : ${name2}`; // 템플릿 리터럴
console.log(name3);

// 불리언
let isSwitchOff = false;

// Null
let cake;
console.log(cake); // 다른 언어에서는 null 값이 나타나는데, js 에서는 undefined 로 나타난다.

let cake1 = null;
console.log(cake1);

// undefined
let variable;
console.log(variable); // 변수를 선언했는데, 아무 값도 할당하지 않으면 자동으로 undefined

// 3-2. 형 변환 (Casting)
// 묵시적 형 변환 (자동으로)
let numberA = 12;
let numberB = "2"; // 문자열

console.log(numberA * numberB); // 자동으로 문자열의 2를 숫자형으로 변환하여 24의 결과값을 낸다.

// 명시적 형 변환 (의도적으로 직접 명시)
console.log(numberA + numberB); // 덧셈은 문자열로 결과 값을 준다.
console.log(numberA + parseInt(numberB)); // parseInt 함수는 문자열의 숫자를 숫자형으로 변환해준다.

// 4. 연산자
// 산술 연산자
let a = 1;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 연결 연산자
let c = "1";
let d = 2; // 묵시적 형변환

console.log(c + d);

// 복합 연산자
let e = 5;

// e = e + 10;
e += 10;
e -= 10;
e *= 2;
e /= 2;

console.log(e);

// 증감 연산자 (숫자형에만 사용 가능)
let f = 10;

f++;

console.log(f);
