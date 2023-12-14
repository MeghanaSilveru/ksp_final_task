alert("NOTIFICATION");
console.log("NICE MEETING YOU");// NICE MEETING YOU
let A=10;
let B=20;
let C=30;
const D=40;
console.log(C); //30

let name="meghana"; //string type
let age=21;// integer type
let good=true;//boolean type
console.log(name);// meghana
console.log(age);// 21
console.log(good);// true
 A=50;
console.log(A); // 50
console.log(D);// 40
result= (A-B)*2;
console.log(result); // 60

// ARITHMETIC OPERATORS LIKE + - * / % ** ++ --
console.log(A+B);// 70
console.log(B-C);// -10
console.log(B*C);// 600
console.log(D/B);// 2
console.log(D%B);// 0
console.log(C**B);// 3.486784401E29
console.log(A++);// 50
B++;
console.log(B);// 21
console.log(C--);// 30
age--;
console.log(age);// 20

// assignment operator like += -= *= /= %= **
let number1=2;
let number2=3;
let number3=4;
let number4=5;
result1= number1+10;
console.log(result1);// 12
console.log(number1+=10);// 12 
console.log(number2-=20);// -17
console.log(number3*=10);// 40
console.log(number4**=3);// 125

//comparision operator
let number5=2;
let number6="2";
let number7=2;
let number8=2;
console.log(number5=50);// 50
console.log(number7!=number5);// true
console.log(number5==number6);// false
console.log(number7===number6);// false
console.log(number7==number8);// true
console.log(number7===number8);// true
console.log(number5<number8);// false
console.log(number7<=number8);// true
console.log(number5>number8);// true
console.log(number7>=number8);//true

// logical operators
console.log(number7!=number5 && number7==number8); // true && true = true
console.log(number7!=number5 && number5==number6); // true && false = false
console.log(number7===number6 && number7==number8); // false && true = false
console.log(number5<number8 && number5==number6); // false && false = false

console.log(number7!=number5 || number7==number8); // true || true = true
console.log(number7!=number5 || number5==number6); // true || false = true
console.log(number7===number6 || number7==number8); // false || true = true
console.log(number5<number8 || number5==number6); // false || false = false

console.log(!number5<number8);// true
console.log(!(number7!=number5 || number7==number8)); //false

// functions
function me(){
    console.log("MEGHANA");
}
function friend1(){
    console.log("CHANDANA");
}
function friend2(){
    console.log("HARSHINI");
}
me();
friend1();
friend2();


// let num1=5;
// let num2=10;
function addition(num1,num2){ // parameters
    console.log(num1+num2); 
}
addition(5,10); // argument

function multiply(num3,num4){
    console.log(num3*num4);
}
multiply(10,10);


// conditional statements (if,else if,else)
let count=50  // ugly
if (count>=90){
    console.log("Beautiful");
}
else if (count>=80){
    console.log("Average");
}
else{
    console.log("Ugly");
}

// loops
// for loop
let count1;
for (count1=0;count1<10;count1++){
    console.log(count1);
}

let count2;
for (count2=10;count2>0;count2--){
    console.log(count2);
}

// while loop
let count3=0;
while (count3<100){
    console.log("AYESHA");
    count3++;
}










