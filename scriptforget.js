function recoverPass() {
    var emailInput = document.getElementById('recovery-email').value;
    if (emailInput) {
    setTimeout(function() {
        document.getElementById('hidden-box').style.display ='block';
    }, 1000);
    document.getElementById('recovery-email-input').innerText = emailInput;
} else {
    alert('Por favor, insira um e-mail válido.');
}};

function doneButton() {
    window.location.href = 'refazerSenha.html';
}

