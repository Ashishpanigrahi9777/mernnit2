const obj1 = {
    name: "Ashish",
    age: 19,
    isStudent: true,
    country: "India"
};
obj1.name="xyz";
obj1.regdno=234;
console.log(obj1)
const obj2={
    ...obj1,
    name2:"Ram",
    regdno2:234
}
console.log(obj2)

const { name, age , name2, regdno2 } = obj2;
console.log(name, age, name2, regdno2);