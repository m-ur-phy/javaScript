// 2-4. 연산자
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
