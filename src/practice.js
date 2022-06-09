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

// 7. 함수 표현식
let hello = function () {
  // 변수가 함수를 담을수도 있다.
  // 이렇게 변수에 함수를 담아서 사용하는 것을 함수 표현식이라고 한다.
  return "안녕하세요 여러분";
};

const helloText = hello(); // helloText 는 hello() 를 호출한 결과값이 된다.
console.log(helloText);

// 선언식과 표현식의 차이는???

console.log(helloB()); // 어 위에서도 호출이 되네, 호이스팅 (함수 선언식으로 만들어진 함수는 프로그램의 최상단에 위치)
// console.log(helloA()); // 어 안되네

// 함수 표현식
let helloA = function () {
  return "안녕하세요 여러분";
};

console.log(helloA()); // 표현식으로 완성된 함수는 초기화 된 다음에 사용할 수 있다.

// 함수 선언식
function helloB() {
  return "안녕하세요 여러분";
}

// 함수 표현식을 더 간략하게 쓸 수 있는 방법
// 화살표 함수

let helloC = () => {
  return "안녕하세요 여러분";
}; // 화살표 함수

let helloD = () => "안녕하세요 여러분"; // "안녕하세요 여러분"만 반환한다면 이렇게도 사용할 수 있다.
// 화살표 함수 또한 호이스팅의 대상이 아니기 때문에 순서를 잘 지켜서 사용해야함

// 8. 콜백 함수
// 어떤 다른 함수에 매개변수로 함수를 넘겨준 것을 말함

// 기분에 따라 다른 동작을 하는 함수를 만들어보자
function checkMood(mood, goodCallback, badCallback) {
  if (mood === "good") {
    // 기분 좋을 때 하는 동작
    goodCallback();
  } else {
    // 기분 안 좋을 때 하는 동작
    badCallback();
  }
}

function cry() {
  console.log("ACTION :: CRY");
}

function sing() {
  console.log("ACTION :: SING");
}

function dance() {
  console.log("ACTION :: DANCE");
}

checkMood("sad", sing, cry);
// 콜백 함수를 사용하면 유연한

// 9. 객체
// 객체 생성 방식 1
let person = new Object(); // 객체 생성자 방식

// 객체 생성 방식 2
let human = {}; // 객체 리터럴 방식

// 객체
let i = {
  key1: "value1", // 프로퍼티 (객체 프로퍼티)
  key2: "value2",
  key3: true,
  key4: undefined,
  key5: [1, 2],
  key6: function () {}
};

console.log(i.key1); // 프로퍼티 접근법 1. 점 표기법

let personInfo1 = {
  name: "m-ur-phy",
  age: 25
};

console.log(personInfo1["name"]); // 프로퍼티 접근법 2. 괄호 표기법 (꼭 문자열로)

// 괄호 표기법 사용예제

console.log(getPropertyValue("name"));

function getPropertyValue(key) {
  return personInfo1[key];
}

// 객체 프로퍼티 추가 삭제

let personInfo2 = {
  name: "m-ur-phy",
  age: 25
};

personInfo2.location = "korea"; // 프로퍼티 추가
personInfo2["gender"] = "f"; // 괄호 표기법을 이용한 프로퍼티 추가

personInfo2.name = "murphy"; // 프로퍼티 수정
personInfo2["age"] = 20; // 괄호 표기법을 이용한 프로퍼티 수정

delete personInfo2.age; // 프로퍼티 삭제
delete personInfo2["name"]; // 괄호 표기법을 이용한 프로퍼티 삭제
// 이러한 방식은 실제 객체와 프로퍼티간의 연결을 끊을 뿐 메모리가 지워지진 않는다.
// 그렇기 때문에 아래 방식을 더 선호한다.

personInfo2.gender = null;

console.log(personInfo2);

/*
const personInfo2 = {
  name: "m-ur-phy",
  age: 25
};
는 오류가 나지 않을까? 상수잖아!

그렇지 않다. 프로퍼티 값을 수정하는 행위는 personInfo2 자체를 수정하는 행위가 아니기 때문이다.
*/

// 객체 프로퍼티가 함수인 경우
const personInfo3 = {
  name: "수수께끼", // 멤버
  age: 23, // 멤버
  say: function () {
    console.log(`i'm 23 난 ${this.name}`); // 백틱 사용하기
  } // 객체 프로퍼티로 함수를 담는 것을 메서드(방법)라고한다.
};

personInfo3.say();

console.log(person.gender); // 존재하지 않는 프로퍼티의 접근은 최대한 안하는 것이 선호됨
console.log(`name : ${"name" in personInfo3}`); // 그래서 객체 내에 프로퍼티가 존재하는지 확인하는 방법
console.log(`gender : ${"gender" in person}`); // in 연산자를 사용해서 프로퍼티의 존재여부를 불리언으로 확인할 수 있다.
