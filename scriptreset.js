document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('save-new-password-button');
    const newPasswordInput = document.getElementById('new-password');
    const confirmNewPasswordInput = document.getElementById('confirm-new-password');
    const infoSection = document.getElementById('info-section');

    saveButton.addEventListener('click', function() {
        const newPassword = newPasswordInput.value;
        const confirmNewPassword = confirmNewPasswordInput.value;
        let message = '';

        const existingMessage = document.getElementById('password-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        if (!newPassword) {
            message = 'Por favor, insira a nova senha!';
        } else if (newPassword !== confirmNewPassword) {
            message = 'As senhas devem ser correspondentes!';
        } else {
            message = 'Senha alterada com sucesso, retorne à página de Login para acessar sua conta!';
        }

        const messageParagraph = document.createElement('p');
        messageParagraph.id = 'password-message';
        messageParagraph.textContent = message;
        infoSection.appendChild(messageParagraph);
    });
});