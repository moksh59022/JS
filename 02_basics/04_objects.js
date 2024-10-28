// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id="123"
tinderUser.name="mdekmd"
tinderUser.isLogged = false
// console.table(tinderUser);


const regularUser = {
    email:"dmkdscmod",
    fullname:{
       userFullName: {
        firstname:"moksh",
        lastname:"sharma"
       },
    }
}

// console.log(regularUser.fullname.userFullName);

const obj1 = {1:"a",2:"b"}
const obj2 = {1:"a",2:"b"}

// const obj3 = {obj1,obj2}
// console.log(obj3);
// const obj4 = Object.assign({},obj1,obj2)
// console.log(obj4);


const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
    {
     id:1,
    email:"abc@gmail.com"
    },
    {
    id:1,
    email:"ac@gmail.com"

    },
    {
    id:1,
    email:"abc@gmail.com"
    }
]

//  console.log( user[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


 const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"moksh"
 }

console.log(course.courseInstructor)

const {courseInstructor:instructor} = course

console.log(instructor);

// destructuring 

// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")


// {
//     "name": "moksh",
//      "coursename":"js in hindi",
//      "price":"free"
// }

[
    {},
    {},
    {}
]