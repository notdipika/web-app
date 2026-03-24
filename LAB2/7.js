function validateAge() {
    const ageInput = document.getElementById('age');
    const ageWarning = document.getElementById('ageWarning');

    if (ageInput.value < 16) {
        ageWarning.style.display = 'block';
        ageInput.focus();
        return false;
    } else {
        ageWarning.style.display = 'none';
        return true;
    }
}

document.getElementById('age').addEventListener('input', function() {
    const ageWarning = document.getElementById('ageWarning');
    if (this.value < 16) {
        ageWarning.style.display = 'block';
    } else {
        ageWarning.style.display = 'none';
    }
});
