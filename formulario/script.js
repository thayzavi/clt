

document.getElementById('freelancerForm').addEventListener('submit', function (event) {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    if (!nome || !sobrenome || !telefone || !email){
        alert('Por favor, preencha todos os campos obrigatórios.');
        event.preventDefault();
    } else{
        alert('Formulário enviado com sucesso!')
    }

});