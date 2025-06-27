class RegisterUser {
    registering() {
        try {
            // Aqui eu salvo o objeto que criei salvando email e senha do usuário.
            const credentialsUser = this.getCredentials();

            console.log("register is on", credentialsUser);
            return true;
        } catch (error) {
            console.log("Falha ao efetuar Login", error);
            return false;
        }
    }

    getCredentials() {
        // aqui eu busco os valores digitados pelo usuáio e guardados no HTML
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        // verifico se os valores estão sendo salvos na variável
        if (!nameInput || !emailInput || !passwordInput) {
            throw new Error('Campos de e-mail ou senha não encontrados no DOM.');
        }

        // transformo o valor salvo em .value em padrão de texto
        const name = String(nameInput.value);
        const email = String(emailInput.value);
        const password = String(passwordInput.value);

        // verifico se e-mail ou senha não estão vazio ou indefinido
        if (name == '' || name === undefined) {
            throw new Error('Nome está vazio ou não definido corretamente.');
        }

        if (email == '' || email === undefined) {
            throw new Error('E-mail está vazio ou não definido corretamente.');
        }

        if (password == '' || password === undefined) {
            throw new Error('Senha está vazio ou não definido corretamente.');
        }

        // após todas essas validações, crio um objeto e salvo os valores em texto.
        const credentialsUser = {
            name: name,
            email: email,
            password: password,
        };        

        return credentialsUser;
    }
}

const AppRegisterUser = new RegisterUser();

document.getElementById('login-button')?.addEventListener('click', (event) => {
    event.preventDefault(); // evita o envio do formulário
    AppRegisterUser.registering();
});
