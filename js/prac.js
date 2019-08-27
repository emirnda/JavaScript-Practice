


/* But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers 
which are multiples of both five and seven print "ChickenMonkey".*/



for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("Chicken Monkey");
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken");
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey");
    }
    else {
        console.log(currentNumber);
    }
}

