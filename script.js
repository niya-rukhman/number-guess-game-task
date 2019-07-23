let randomNumber;
let attemptCount;

function generateNewNumber() {
    randomNumber = parseInt(Math.random() * 100);
    attemptCount = 0;
}
generateNewNumber();

function check() {
    let number = parseInt(document.querySelector("input").value);

    if (number > randomNumber) {
        alert("Too Big");
        attemptCount++;
    }
    else if (number < randomNumber) {
        alert("Too Small");
        attemptCount++;
    }
    else {
        alert("Congrates You Win And No. Attempt: " + attemptCount);
        generateNewNumber();

    }

}






