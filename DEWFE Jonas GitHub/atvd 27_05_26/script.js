let contadorTarefas = 0;

function adicionarTarefa() {

    const inputElement = document.getElementById('nova_tarefa');
    const mensagemElement = document.getElementById("mensagem");
    const listaTarefas = document.getElementById('lista_tarefas');
    const contadorElement = document.getElementById("contador");
    const botaoExcluir = document.createElement('button');
    
    let tarefa = inputElement.value;
    let mensagem, cor;

    if (tarefaValida(tarefa)) {

        let novaTarefa = document.createElement('li');

        novaTarefa.textContent = tarefa;

        botaoExcluir.textContent = 'X';

        botaoExcluir.onclick = function() {

            novaTarefa.remove();

            contadorTarefas--;

            contadorElement.textContent = `(${contadorTarefas})`;
        };

        novaTarefa.appendChild(botaoExcluir);

        listaTarefas.appendChild(novaTarefa);

        contadorTarefas++;

        contadorElement.textContent = `(${contadorTarefas})`;

        mensagem = "Adicionado com Sucesso!";
        cor = 'green';

    } else {

        mensagem = "Tarefa inválida! Por favor, redigite.";
        cor = 'red';
    }

    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = cor;

    inputElement.value = '';
    inputElement.focus();
}

function tarefaValida(tarefa) {

    return tarefa.trim() != "";
}

const inputElement = document.getElementById('nova_tarefa');

inputElement.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {

        adicionarTarefa();
    }
});