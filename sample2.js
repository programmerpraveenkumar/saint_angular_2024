//maintain the unique elements
let unique = new Set();
unique.add('test');
unique.add('test2');
unique.add('test');//will be ignored.
console.log(unique);

//key & value
// key shuld not duplicate
let mapObj = new Map();
mapObj.set("name","test");
mapObj.set("mobile","45454");
mapObj.set("mobile","45454545");
console.log(mapObj);


//localStorage & sessionStorage
setItem("token","sdfw");
getItem("token");


get->http Headers,queryParam 
post->http Headers,queryParam,body
(token,"erf")
content-type,"appliction/json"


