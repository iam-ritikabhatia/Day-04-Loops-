// javascript program to print the number from 1 to 10

/*for ( let i = 1; i<= 10; i++){
    console.log(i);
}


// javascript program to print the multiplication of table of 5 using a loop

const number = 5;
for (let i = 1; i <= 10; i++){
    console.log(`${number} * ${i} = ${number * i}`);
}


// program to print a numbers from 1 to 5 using a while loop.

let i = 1;
while ( i <= 5){
    console.log(i);
    i++;
}




// factorial

function calculateFactorial(num){
    let factorial = 1;
    let i = num;

    do {
        factorial *= i;
        i --;
    }
     while (i > 0);
     console.log(`The factorial of ${num} is ${factorial}`);
}

calculateFactorial(5);
calculateFactorial(0);
calculateFactorial(7);



//  write a program to print a pattern using a nested loop

let n = 5;
for ( let i = 1; i <= n; i++){
    let row = '';
    for ( let j = 1; j <= i; j++){
        row += '*';
 }
    console.log(row);
} */


    // print the numbers 1 to 10 but skip 5 with continue statement

    for (let i = 1; i<= 10; i++){
        if ( i === 5){
        continue;
        }
        console.log(i);
    }

    // print the numbers from 1 to 10 but stop the loop when the number is 7 using the brea statement 
    
    for (let i = 1; i <= 10; i++){
        if (i === 7){
        break;
        }
        console.log(i);
    }