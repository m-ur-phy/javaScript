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
// 4-1. 대입 연산자
let A = 1; // 변수에 값을 넣는 역할을 하는 연산자.

// 4-2. 산술 연산자 (사칙 연산)
let a = 1;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b); // 몫
console.log(a % b); // 나머지

// 4-3. 연결 연산자 (문자열 + 문자열)
let c = "1";
let d = 2; // 묵시적 형변환

console.log(c + d);

// 4-4. 복합 연산자
let e = 5;

// e = e + 10;
e += 10;
e -= 10;
e *= 2;
e /= 2;

console.log(e);

// 4-5. 증감 연산자 (숫자형에만 사용 가능)
let f = 10;

f++;
console.log(f);

f--;
console.log(f);

// 전위 연산과 후위 연산의 차이
console.log(++f); // 가장 먼저 적용
console.log(f++); // 라인이 끝나고 나서 적용
console.log(f);

// 4-6. 논리 연산자
console.log(!true); // NOT
console.log(true && true); // AND - 둘 다 참일 때만 참.
console.log(false || false); // OR - 둘 다 거짓일 때만 거짓.

// 4-7. 비교 연산자
// = 같은지 비교
let compareA = 1 == "1";
console.log(compareA); // 타입이 다르더라도 값만 비교하기 때문에 true

compareA = 1 === "1"; // 타입까지 비교하고 싶을 때
console.log(compareA);

let compareB = 2 != "2";
console.log(compareB);

compareB = 2 !== "2";
console.log(compareB); // 같지 않다기 때문에 true

// <> 크고 작음 비교
let compareC = 1 > 2;
console.log(compareC);

compareC = 2 <= 2;
console.log(compareC);

// 4-8. 타입을 알 수 있는 연산자
let compareD = 1;
compareD = "1";
// 숫자형을 넣었다가 문자열을 넣어도 상관 없는 동적 타입 언어

console.log(typeof compareD); // typeof 를 사용하여 타입형 알려주기

// 4-9. null 병합 연산자
// g 라는 변수에 값이 없다면 10을 대입하고, 값이 있다면 그대로 그 값을 대입해라.
// 라는 조건을 어떻게 작성할까요?
let g;

g = g ?? 10; // ?? 를 이용한다. ?? -> null 병합 연산자이다. 양쪽 피 연산자 중 null 이나 undefined 이 아닌 값을 선택한다.
console.log(g); // 10이 나온다.

// 5. 조건문
// 5-1. if

let h = 5;

if (h >= 7) {
  console.log("7 이상입니다.");
} else if (h >= 5) {
  console.log("5 이상입니다.");
} else {
  console.log("5 미만입니다.");
}

// 5-2. switch (두 자리 국가코드 받기)

/* if 문으로 만든 두 자리 국가코드
let country = "ko";

if (country === "ko") {
  console.log("한국");
} else if (country === "cn") {
  console.log("중국");
} else if (country === "jp") {
  console.log("일본");
} else {
  console.log("미분류");
}
*/

let country = "ko";

switch (country) {
  case "ko":
    console.log("한국");
    break;
  case "cn":
    console.log("중국");
    break;
  case "jp":
    console.log("일본");
    break;
  case "uk":
    console.log("영국");
    break;
  default:
    console.log("미분류");
    break;
}

// 6. 함수
// 직사각형 10개의 넓이를 구하는 프로그램을 만든다면???
function getArea(widthR, heightR) {
  let area = widthR * heightR;
  return area; // 값 반환
  // console.log(area); // 콘솔로 보여주기
} // 함수 선언식, 함수 선언 방식의 함수 생성

let area1 = getArea(1, 200); // 함수 호출

// console.log(area); // 지역변수이므로 불러올 수 없음

console.log("area : ", area1);
console.log("함수 실행 완료");
