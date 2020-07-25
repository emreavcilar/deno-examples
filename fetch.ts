const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
const json = res.json();
const data = await json;
console.log(data);