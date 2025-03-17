document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteio').addEventListener('submit', function(e) {
        e.preventDefault();
        let maxNumber = document.getElementById('max-number').value;
        maxNumber = parseInt(maxNumber);
        let amountNumber = document.getElementById('amount-number').value;
        amountNumber = parseInt(amountNumber);
        let results = [];

        for (let i = 0; i < amountNumber; i++) {
            let randomNumber = Math.random() * maxNumber;
            randomNumber = Math.ceil(randomNumber);
            results += randomNumber + ' ';
        }

        if (amountNumber > 1) {
            document.getElementById('result-title').innerText = 'Os números sorteados foram:';
            document.getElementById('result-value').innerText = results;
            document.querySelector('.result').style.display = 'block';
        } else {
            document.getElementById('result-title').innerText = 'O número sorteado foi:';
            document.getElementById('result-value').innerText = results;
            document.querySelector('.result').style.display = 'block';
        }
    })
})