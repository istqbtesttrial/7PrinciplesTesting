function checkAnswers() {
    let score = 0;
    const answers = {
        q1: 'Blue',
        q2: '4',
        q3: 'Blue Whale'
    };

    const form = document.forms['quiz-form'];

    if (form.q1.value === answers.q1) score++;
    if (form.q2.value === answers.q2) score++;
    if (form.q3.value === answers.q3) score++;

    const result = document.getElementById('result');
    if (score === 4) {
        result.textContent = "Congratulations! You got all answers correct.";
        result.style.color = "green";
    } else {
        result.textContent = "Error: You got " + score + " correct answers out of 3.";
        result.style.color = "red";
    }
}
function submitTest() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    let message = "Testing complete. You've submitted:\n";
    message += "Name: " + (name ? name : "No name") + "\n";
    message += "Age: " + (age ? age : "No age") + "\n";
    message += "Email: " + (email ? email : "No email");

    document.getElementById('test-result').textContent = message;

    // Showing message to illustrate that even though inputs are valid,
    // we can't test all possible combinations
    alert("You've tried one combination. Remember, testing all possible combinations is impossible!");
}
