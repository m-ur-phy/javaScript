// API & fetch
/* 이건 api 포장지 그대로 호출한 것이나 마찬가지임
let response = fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
  console.log(res)
);
*/

// 포장지를 뜯어서 json 형식의 값만을 가져오기
async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}

getData();
