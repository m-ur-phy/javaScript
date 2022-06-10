// 자바스크립트 응용

// 1. Truthy & Falsy
// 참이 아니라 참 같은 값 Truthy
// 거짓이 아니라 거짓 같은 값 Falsy
let a = [];

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

// 불리언식이 true 가 아니더라도
// 자바스크립트가 참으로 평가하는 값들이 있음 그 값들이 truthy
// [], {}, 숫자 값, "문자형", infinity ...

// 거짓으로 평가하는 값들 Falsy
// null, undefined, 0, -0, NaN, ""(빈 문자열)

// 객체를 매개변수로 받아서 받은 객체에서 특정한 프로퍼티를 반환하는 함수를 포함한 프로그램
const getName = (person) => {
  // 예외처리 방법??? if (person === undefined || person === null) 이건 너무 까다로운데?
  // 그래서 Falsy 속성을 이용해 !person(not person) 으로 처리해줄 수 있다.
  if (!person) {
    // false NOT => True 가 되는 성질을 이용하여 조건문을 달아준것...!!!
    return "객체가 아닙니다";
  }
  return person.name;
};

let person = null; // = { name: "m-ur-phy" };
// let = person 만 전달한다면??? (undefined 값으로 전달) 오류가 발생한다 왜냐면 점 표기법을 사용했기 때문에 객체가 아니면 오류가 날수밖에 없...
// null 값 또한 마찬가지
const name = getName(person);
console.log(name);

// 2. 삼항 연산자
// 조건문 파격적으로 줄이기
let A = 3;

if (A >= 0) {
  console.log("양수");
} else {
  console.log("음수");
}

// 위 코드는 다음과 같다
a >= 0 ? console.log("양수") : console.log("음수");
// 조건식 ? 참일 때 수행할 식 : 거짓일 때 수행할 식 ;

// 배열을 이용한 예제 (주어진 배열이 비어있는지 확인하고 비어있다면 비어있습니다 를 출력, 그렇지 않다면 비어있지 않습니다를 출력하는 프로그램)
let ar = [];

if (ar.length === 0) {
  console.log("빈 배열");
} else {
  console.log("안 빈 배열");
}

ar.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");

// 위의 예제를 응용하여 값을 참일 때와 거짓일 때를 구분해서 반환하게 만들기
const arStatus = ar.length === 0 ? "빈 배열" : "안 빈 배열";
console.log(arStatus);

// 삼항연산자 스마트하게 써보기
// Truthy 와 Falsy 이용해서~

let b; // undefined 값 = falsy

const result = b ? true : false;
console.log(result); // false

let br = []; // 배열 값 = truthy

const res = br ? true : false;
console.log(res);

// 삼항연산자 중첩해서 사용하기
// TODO : 학점 계산 프로그램
// 90점 이상 A+
// 50점 이상 B+
// 둘 다 아니면 F

let score = 100;

score >= 90
  ? console.log("A+")
  : score >= 50
  ? console.log("B+")
  : console.log("F");

// 삼항연산자가 더 많아지게 되면 (중첩을 사용해야하면) 가급적 if 문으로 변환해서 가독성을 높이는 것이 더 좋다
// if 문으로 바꾸기

if (score >= 90) {
  console.log("A+");
} else if (score >= 50) {
  console.log("B+");
} else {
  console.log("F");
}

// 3. 단락 회로 평가
// 논리 연산자를 활용한 단락 회로 평가

// 논리 연산자 복습
// AND 둘 다 참일 때만 참
console.log(true && true);

// OR 둘 중 하나라도 참이면 참
console.log(true || false);

// NOT
console.log(!false);

// 단락 회로 평가는?
console.log(false && true); // 이미 앞이 false 이므로 false
// 뒤에 위치한 피연산자를 확인할 필요 없이 그냥 연산을 끝내버리는 것을 단락 회로 평가라고 한다

// 함수를 포함한 프로그램 예제
const gName = (people) => {
  const v = people && people.name; // true && true 라서 person.name 값을 반환
  return v || "객체가 아닙니다"; // OR 에서 이미 앞이 True 기 때문에 더 볼필요 없이 v 반환
};

let people = { name: "m-ur-phy" };
const nm = gName(people);
console.log(nm);
