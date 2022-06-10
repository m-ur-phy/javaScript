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
