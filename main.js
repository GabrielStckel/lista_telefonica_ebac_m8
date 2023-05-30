const form = document.getElementById('form-lista');
const nomes = new Set();
const numeros = new Set();
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    atualizaTabela();
});

function adicionalinha() {
    const inputNomeLista = document.getElementById('nome-lista');
    const inputNumeroLista = document.getElementById('numero-lista');

    const nome = inputNomeLista.value;
    const numero = inputNumeroLista.value;

    if (nomes.has(nome)) {
        alert(`O nome: ${inputNomeLista.value} já existe em sua agenda, por favor insira outro.`)
        return;
    }

    if (numeros.has(numero)) {
        alert(`O número: ${inputNumeroLista.value} já existe em sua agenda, por favor insira outro.`)
        return;
    }

    let linha = '<tr>';
    linha += `<td>${nome}</td>`;
    linha += `<td>${numero}</td>`;
    linha += '</tr>';

    linhas += linha;

    nomes.add(nome);
    numeros.add(numero);

    inputNomeLista.value = '';
    inputNumeroLista.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
