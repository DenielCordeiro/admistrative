class Login {
    constructor() {
        this.verifyIsLogin();
    }

    verifyIsLogin() {
        try {
            console.log('buscar token');
            return true;
        } catch (error) {
            throw new Error('Não está logado!', error);
        }
    }

    login() {
        try {
            // Aqui eu salvo o objeto que criei salvando email e senha do usuário.
            const credentialsUser = this.getCredentials();

            console.log('login is on', credentialsUser);

            

            return true;
        } catch (error) {
            throw new Error('Falha ao efetuar login', error);
        }
    }

    getCredentials() {
        // aqui eu busco os valores digitados pelo usuáio e guardados no HTML
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        // verifico se os valores estão sendo salvos na variável
        if (!emailInput || !passwordInput) {
            throw new Error('Campos de e-mail ou senha não encontrados no DOM.');
        }

        // transformo o valor salvo em .value em padrão de texto
        const email = String(emailInput.value);
        const password = String(passwordInput.value);

        // verifico se e-mail ou senha não estão vazio ou indefinido
        if (email == '' || email === undefined) {
            throw new Error('E-mail está vazio ou não definido corretamente.');
        }

        if (password == '' || password === undefined) {
            throw new Error('Senha está vazio ou não definido corretamente.');
        }

        // após todas essas validações, crio um objeto e salvo os valores em texto.
        const credentialsUser = {
            email: email,
            password: password,
        };        

        return credentialsUser;
    }
}

const AppLogin = new Login();

document.getElementById('login-button')?.addEventListener('click', (event) => {
    event.preventDefault(); // evita o envio do formulário
    AppLogin.login();
});
