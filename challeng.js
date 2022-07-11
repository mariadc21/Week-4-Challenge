//Very Easy

function min(){
    let num1 = prompt("Enter first number: ")
    let num2 = prompt("Enter second number: ")
    
    if (num1 < num2)
     alert(`${num1} is less than ${num2}`)
    else if (num1 > num2)
     alert(`${num2} is less than ${num1}`)
    else alert("error")
}
min();

//Easy

let students =  [
    {'first':'Bob',
    'last': 'Smith' ,
    'age': 17},
    {'first':'John', 
    'last': 'Doe', 
    'age': 19 },
    {'first': 'Jane' , 
    'last' : 'William',
    'age': 16}]
alert(`Hello my name is ${students[1]['first']} ${students[1]['last']} and I'm ${students[1]['age']}`)

//medium

let months =['Null','January','February','March','April','May',
'June','July','August','September','October','November','December']

let mon = prompt(" Enter month number between 1 and 12")
if (mon < 1){
    console.log('Number was less than 1');
}
else if (mon > 12){
    console.log('Number was greater than 12');
} 
else{
    console.log(`${months[mon]}`);
}

//Hard

let tom =[{"height":9},{"mass": 8}]
let jerry =[{"height":10},{"mass": 45}]
let BMIs=[]

function BMIfun(mass,height){
  let  calculation = mass/(height*height)
    BMIs.push(calculation)
    console.log(BMIs)
    alert (BMIs)
}

BMIfun(tom[1]["mass"],tom[0]["height"])
BMIfun(jerry[1]["mass"],jerry[0]["height"])

console.log(BMIs[0])
console.log(BMIs[1])
let answer=(BMIs[0]) > (BMIs[1])
console.log(`Is Tom's BMI higher than Jerry's? ${answer}`)

