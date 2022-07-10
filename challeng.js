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