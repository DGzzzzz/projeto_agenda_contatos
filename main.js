const form = document.getElementById('form-agenda');
const Contato = [];
const Fone = [];
let linhas = '';
    form.addEventListener('submit', function(e){
        e.preventDefault();
        adicionaContato();
        atualizaTabela();
});
        function adicionaContato() {
            const inputNome = document.getElementById('Nome');
            const inputNumero = document.getElementById('Numero');

            if (Fone.includes(inputNumero.value)){
                alert(`O contato: ${inputNome.value} com o numero: ${inputNumero.value} já foi inserido`);
            } else {
                
                Contato.push(inputNome.value);
            Fone.push(inputNumero.value);
                
                let linha = '<tr>';
            linha += `<td>${inputNome.value}</td>`;
            linha += `<td>${inputNumero.value}</td>`;
            linha += '</tr>';

            linhas += linha;
            }

            inputNome.value = '';
            inputNumero.value = '';

        }

        function atualizaTabela() {
            const corpoTabela = document.querySelector('tbody');
            corpoTabela.innerHTML = linhas;
        }