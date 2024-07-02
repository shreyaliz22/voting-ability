document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const resultElement = document.getElementById('result');
    
    if (age >= 18) {
        resultElement.textContent = `Hello ${name}, you are eligible to vote.`;
        resultElement.style.color = 'green';
    } else if (age >= 0) {
        resultElement.textContent = `Hello ${name}, you are not eligible to vote yet.`;
        resultElement.style.color = 'red';
    } else {
        resultElement.textContent = `Invalid age entered. Please try again.`;
        resultElement.style.color = 'orange';
    }
});
