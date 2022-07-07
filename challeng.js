//Very Easy

function min(){
    let num1 = prompt("Enter first number: ")
    let x= parseInt(num1);
    let num2 = prompt("Enter second number: ")
    let y= parseInt(num2);
    
    if (num1 < num2)
     alert(`${num1} is less than ${num2}`)
    else if (num1 > num2)
     alert(`${num2} is less than ${num1}`)
    else alert("error")
}

min();