const form = document.getElementById('form-pipiComparsion');

function comparsion(A,B) {
    return B > A
}

form.addEventListener('submit', function(e) {
    let biggyB = false;
    e.preventDefault();

    const pipA = document.getElementById('numberA');
    const pipB = document.getElementById('numberB');
    
    if (pipA.value == pipB.value) {
        pipA.value = '';
        pipB.value = '';
        document.querySelector('.success-message').style.display = 'none';
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.even-message').style.display = 'block';
    } else {

    biggyB = comparsion (pipA.value,pipB.value)
    if (biggyB) {
        pipA.value = '';
        pipB.value = '';
        document.querySelector('.success-message').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.even-message').style.display = 'none';
    } else {
        pipA.value = '';
        pipB.value = '';
        document.querySelector('.success-message').style.display = 'none';
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.even-message').style.display = 'none';
    }}
})
