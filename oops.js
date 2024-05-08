class City{
    cityname;
    printCityName(){
        console.log(this.cityname);
    }
}
//inheritance
class Student extends City{
    name;
    age;
    constructor(name,age){
        super();//in inheritance,it must we should use super keyword to call the parent class constructor
        //`this` refers to global variable
        this.name = name;
        this.age = age;
    }
    printDetail(){
        console.log(this.name,this.age);
    }
}
let stu = new Student("test",56);
stu.printDetail();
stu.cityname = "sample";
stu.printCityName();