// Função para definir credenciais padrão
function definirCredenciaisPadrao(): void {
    // Define o e-mail padrão no localStorage
    localStorage.setItem('email', 'restic@cepedi.com');
    // Define a senha padrão no localStorage
    localStorage.setItem('senha', 'restic36');
}

// Função para validar o login
function validarLogin(event: Event): void {
    event.preventDefault(); // Impede o envio do formulário, permitindo que o JavaScript trate o login

    // Seleciona o campo de entrada de e-mail usando o seletor de atributo
    const emailInput = document.querySelector<HTMLInputElement>('input[name="email"]');
    // Seleciona o campo de entrada de senha usando o seletor de atributo
    const senhaInput = document.querySelector<HTMLInputElement>('input[name="senha"]');
    // Seleciona a div para exibir mensagens de erro ou sucesso
    const mensagemDiv = document.getElementById('message');

    // Verifica se todos os elementos necessários foram encontrados
    if (emailInput && senhaInput && mensagemDiv) {
        // Obtém os valores dos campos de entrada
        const email = emailInput.value;
        const senha = senhaInput.value;

        // Obtém as credenciais armazenadas no localStorage
        const emailArmazenado = localStorage.getItem('email');
        const senhaArmazenada = localStorage.getItem('senha');

        // Compara as credenciais fornecidas com as armazenadas
        if (email === emailArmazenado && senha === senhaArmazenada) {
            // Se as credenciais corresponderem, exibe uma mensagem de sucesso
            mensagemDiv.textContent = 'Login realizado com sucesso!';
            mensagemDiv.style.color = 'green'; // Define a cor do texto como verde
        } else {
            // Se as credenciais não corresponderem, exibe uma mensagem de erro
            mensagemDiv.textContent = 'Usuário ou senha inválidos.';
            mensagemDiv.style.color = 'red'; // Define a cor do texto como vermelho
        }
    }
}

// Define credenciais padrão na primeira carga
document.addEventListener('DOMContentLoaded', definirCredenciaisPadrao);
// Adiciona um ouvinte de evento que executa a função definirCredenciaisPadrao quando o documento é carregado

// Adiciona o evento de submissão ao formulário
const form = document.querySelector('form');
// Seleciona o primeiro formulário na página
if (form) {
    // Se o formulário for encontrado, adiciona um ouvinte de evento para o evento de submit
    form.addEventListener('submit', validarLogin);
}
