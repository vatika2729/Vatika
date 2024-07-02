// const seatingChart = [
//     ["Simran", "Nitish", "Himanshi"],
//     ["Krishna", "Mukul", " Lokesh", "Vatika"],
//     ["Pawan", "Durga", "Ajeet", "Balvant"]
// ]



// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];

//     for (let j = 0; j < row.length; j++) {
//         console.log(`R${i + 1}${j + 1}    ${row[j]}`);
//     }
// }

let maximumNumber = parseInt(prompt("Enter a maximum number from 10, 100, 1000"));
var randomNumber = 0;

while (!maximumNumber) {
    maximumNumber = parseInt(prompt("Invalid maximum number, provide valid number from 10, 100, 1000"));
}

while (maximumNumber) {
    if (maximumNumber === 10 || maximumNumber === 100 || maximumNumber === 1000) {

        randomNumber = Math.floor(Math.random() * maximumNumber) + 1;
        alert(randomNumber);
        break;
    }
    else {
        maximumNumber = parseInt(prompt("Enter a maximum number from 10, 100, 1000"));
        while (!maximumNumber) {
            maximumNumber = parseInt(prompt("Invalid number, provide valid number from 10, 100, 1000"));
        }

    }
}

let guess = prompt("Provide Your guess, to quit press Q");
let count = 1;


while (parseInt(guess) !== randomNumber) {

    if (guess.toLowerCase() == 'q') {
        console.log(randomNumber);
        alert("Thankyou for playing, Now you have quit the game.");
        break;

    }
    else if (guess > randomNumber) {

        guess = prompt("Provided value is greater then the actual value, to quit press Q.");
        count++;
    }
    else if (guess < randomNumber) {

        guess = prompt("Provided value is smaller then the actual value, to quit press Q.");
        count++;
    }
    else {
        guess = prompt("Invalid Value, Please try again, to quit press Q.");
        count++
    }


}
if (guess.toLowerCase() !== 'q') {
    if (count !== 1) {
        alert("Congrats!!!");
        alert(`Hey User, Your number of attempts: ${count}`);
    }
    else {
        alert("Congrats!!!");
        alert(`Hey User, You have guess the number in your first attempt    Hurray!!!`);
    }
}
