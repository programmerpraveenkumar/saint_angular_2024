var name = ['abc','anchor','zoo','bird'];
//get the name starts with 'a'
let  filterName = name.filter((obj)=>obj.startsWith('a'));
console.log(filterName);


var name = [{name:'abc'},{name:'anchor'},{name:'zoo'},{name:'bird'}];
//get the name starts with 'a'
let  filterName2 = name.filter((obj)=>obj['name'].startsWith('a'));
let  filterName3 = name.filter((obj)=>obj['name'].startsWith('a')).map(obj=>{return obj.name});
console.log(filterName2);
console.log(filterName3);
(function(){
    console.log('wer');
})();

//arrow function
(()=>{
    console.log('werwer234');
})()

// function sample(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{res("success")},2000);
//     })
    
// }

// let prms_res = await sample();
// async/await 


name.forEach(element => {
    console.log(element);
});

let detail = {"name":"awefd",'age':78,'mobile':'234'};
///foreach will not work with objects.



// for(let n in name){
//     if(name[n].startsWith(a)){

//     }
// }

