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

// 4. 조건문 업그레이드

// 간결 1
function isKoreanFood(food) {
  // (food === "불고기" || food === "비빔밥" || food === "떡볶이") 와 복잡하다 복잡해 더 간결하게 가자 !!!
  if (["불고기", "떡볶이", "비빔밥"].includes(food)) {
    // 배열과 내장함수 이용해서 간결하게 !!!
    return true;
  }
  return false;
}

const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("파스타");
console.log(food1);
console.log(food2);

// 주어진 값에 따라서 각각 다른 결과를 반환하는 함수 만들기
// 한식인지, 중식인지, 양식인지를 받고 그것의 대표메뉴를 반환해주는 프로그램
const getMeal = (mealType) => {
  if (mealType === "한식") return "불고기";
  if (mealType === "양식") return "파스타";
  if (mealType === "중식") return "멘보샤";
  if (mealType === "일식") return "초밥";
  return "쫄쫄 굶기";
};

console.log(getMeal("한식"));

// 아니 전세계를 다 만들라고?!?!?!?
// 어떡하지..

// 간결 2
const meal = {
  한식: "불고기",
  중식: "멘보샤",
  일식: "초밥",
  양식: "스테이크",
  인도식: "카레"
};

const getMealUp = (mealType) => {
  return meal[mealType] || "쫄~쫄~굶기"; // 객체의 괄호표기법으로 간단하게 줄일 수 있다!!!
};

console.log(getMealUp("한식"));
console.log(getMealUp());

// 5. 비 구조화 할당
// 배열과 객체를 우아하게 사용하는 방법

// 배열의 비 구조화 할당
let arr = ["one", "two", "three"];

/* 이 할당 과정을 줄일 수 있다
let one = arr[0];
let two = arr[1];
let three = arr[2];
*/

let [one, two, three] = arr;
// 대괄호를 이용해서 배열의 값을 순서대로 할당 받아 사용할 수 있는 것을 바로
// 배열의 비 구조화 할당이라고 한다.
// 배열의 기본 변수 비 구조화 할당
console.log(one, two, three);

// 더 줄이는 방법
// 배열의 선언 분리 비 구조화 할당
let [o, t, th, f = "four"] = ["on", "tw", "thr"];
console.log(o, t, th, f); // 마지막 f 는 할당받지 못함 그래서 f="four" 과 같이 기본 값을 설정해줄 수 있음

// swap

let m = 10;
let u = 20;
let tmp = 0;
console.log(m, u);

/*
tmp = m;
m = u;
u = tmp;
console.log(m, u); // 값 스왑. 벌써 길다.
*/

// 비 구조화 할당으로 쉽게 스왑하기
[m, u] = [u, m];
console.log(m, u);

// 객체의 비 구조화 할당
let object = { oneone: "one", twotwo: "two", threethree: "three" };

/* 길다 길어!!!
let oneone = object.one;
let twotwo = object.two;
let threethree = object.three;
*/

// 비 구조화 할당 이용해서 짧게
let { oneone, twotwo, threethree } = object; // 키 값을 기준으로 할당 키 값을 입력해야함 (변수명이 강제된다는...)
console.log(oneone, twotwo, threethree);

// 내 맘대로 변수 할거야
let {
  oneone: onew,
  twotwo: toto,
  threethree: threee,
  abc = "newthing"
} = object; // 여기도 생성시 기본값 설정 가능
console.log(onew, toto, threee);

// 6. spread 연산자
// 배열과 객체를 한줄로 펼치는 방법
// ... 스프레드!

// 객체 중복 프로퍼티 펼치기
const cookie = {
  base: "cookie",
  madeIn: "korea"
};

// base 와 madeIn 은 계속 중복된다...
const chocochipCookie = {
  ...cookie, // ...cookie 를 적어주면...?
  toping: "chocochip"
};

const blueberryCookie = {
  ...cookie,
  toping: "blueberry"
};

const strawberryCookie = {
  ...cookie,
  toping: "strawberry"
};

console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(strawberryCookie);

// 배열 펼치기
const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키", "초코칩쿠키"];

const allCookies = [
  ...noTopingCookies,
  "함정 쿠키다 우하하하",
  ...topingCookies
];
console.log(allCookies);

/* 콜백 지옥 실습용 각주 시작~~₩₩₩~~~₩₩~₩~~~~~₩₩₩~₩₩

// 7. 동기 & 비동기
// 순서대로 실행하는 것과 그렇지 않은 것들

// 동기적 방식 예제
function taskA() {
  console.log("A 작업 끝");
}

taskA();
console.log("코드 끝1");

// 비동기적 방식 예제
function taskAA() {
  setTimeout(() => {
    console.log("AA TASK END");
  }, 2000); // setTimeout 타이머를 만들 수 있는 내장 비동기함수
}

taskAA();
console.log("코드 끝2");

// 예제 2
function taskAAA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

// 1초 뒤에 전달받은 파라미터에 * 2를 하는 함수
function taskB(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

taskAAA(3, 4, (res) => {
  console.log("A TASK RESULT : ", res);
});

taskB(7, (res) => {
  console.log("B TASK RESULT : ", res);
});

taskC(14, (res) => {
  console.log("C TASK RESULT : ", res);
});

console.log("코드 끝3");

// 예제 3
function taska(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

// 1초 뒤에 전달받은 파라미터에 * 2를 하는 함수
function taskb(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function taskc(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

// 야 콜백 지옥이다~~~~~
taska(4, 5, (a_res) => {
  console.log("A RESULT : ", a_res);
  taskb(a_res, (b_res) => {
    console.log("B RESULT : ", b_res);
    taskc(b_res, (c_res) => {
      console.log("C RESULT : ", c_res);
    });
  });
});

// 8. Promise 콜백 지옥에서 탈출하기

// 2초 뒤에 전달 받은 값이 양수인지 음수인지 판단하는 비동기작업
function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형 값이 아닙니다");
    }
  }, 2000);
}

// promise를 사용해서 비동기 처리하기
function isPositiveP(number) {
  const executor = (resolve, reject) => {
    // executor 실행자 함수
    setTimeout(() => {
      if (typeof number === "number") {
        // 성공 -> resolve
        console.log(number);
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        // 실패 -> reject
        reject("주어진 값이 숫자형 값이 아닙니다");
      }
    }, 2000); // 2초 뒤
  };

  const asyncTask = new Promise(executor);
  return asyncTask;
}

const resul = isPositiveP(101);

resul
  .then((res) => {
    console.log("작업 성공 : ", res);
  })
  .catch((err) => {
    console.log("작업 실패 : ", err);
  });

// isPositive(
//   10,
//   (res) => {
//     console.log("성공적으로 수행됨 : ", res);
//   },
//   (err) => {
//     console.log("실패 하였음 : ", err);
//   }
// );

콜백 지옥 실습용 각주 끝 ~~~~₩₩₩~~~~~₩₩₩₩₩₩₩ */

// promise를 이용해서 진짜로 콜백지옥을 탈출해보자!!!!!!!!
function task1(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

// 1초 뒤에 전달받은 파라미터에 * 2를 하는 함수
function task2(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function task3(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

// then 체이닝 .
task1(5, 1)
  .then((a_res) => {
    console.log("A RESULT : ", a_res);
    return task2(a_res);
  })
  .then((b_res) => {
    console.log("B RESULT : ", b_res);
    return task3(b_res);
  })
  .then((c_res) => {
    console.log("C RESULT : ", c_res);
  });

// 위의 코드를 따로 떼어서 쓸 수도 있다.
const bPromiseResult = task1(5, 1).then((a_res) => {
  console.log("A RESULT : ", a_res);
  return task2(a_res);
});

console.log("중간에 다른일 하느라 끊어버리기~");

bPromiseResult
  .then((b_res) => {
    console.log("B RESULT : ", b_res);
    return task3(b_res);
  })
  .then((c_res) => {
    console.log("C RESULT : ", c_res);
  });

// 또 콜백헬인데??? -> 이거 이렇게 쓰는거 아니라그래요
// task1(5, 1).then((a_res) => {
//   console.log("A RESUlT : ", a_res);
//   task2(a_res).then((b_res) => {
//     console.log("B RESULT : ", b_res);
//     task3(b_res).then((c_res) => {
//       console.log("C RESULT : ", c_res);
//     });
//   });
// });

// 콜백 헬~
// task1(3, 4, (a_res) => {
//   console.log("task 1 : ", a_res);
//   task2(a_res, (b_res) => {
//     console.log("task 2 : ", b_res);
//     task3(b_res, (c_res) => {
//       console.log("task 3 : ", c_res);
//     })
//   })
// });
