# To Do List
Praticando orientação a objetos, criando uma lista de tarefas responsiva.

### Descrição do projeto:
Este projeto consiste em uma lista de tarefas simples, com métodos de adicionar tarefas com eventos de remover e concluir, e uma simples lógica que acrescenta +1 a uma variável se uma tarefa for adicionada ou subtrai -1 se for removida, com a finalidade de exibir a mensagem 'Não há tarefas cadastradas', se houver mais de 1 tarefa.

### Tecnologias utilizadas:
- Html
- Tailwindcss
- Javascript

### Funcionalidades Implementadas:
- Adicionar tarefas
- Remover tarefas
- Marcar tarefas concluídas

### Métodos Implementados:
- **addTask()**: Clona modelo de task no html e manipula texto do input para adicionar novas tarefas a lista, utilizando appendChild(), e adiciona eventos de concluir e remover tasks

- **removeTask()**: Remove elemento pai do ícone 'trash', ou seja, remove a tarefa inteira
 
- **completeTask()**: Marcar ou desmarcar ícone check, com 'toggle'
 
- **addEvents()**: Adiciona eventos de click ao último botão de 'trash' e 'check' adicionados, evitando adicionar o mesmo evento ao mesmo item mais de uma vez
 
- **checkTasks()**: Contém a lógica que acrescenta ou remove o valor 1 a uma variável, a fim de exibir a mensagem 'Não há tarefas cadastradas', se houver mais de 1 tarefa

### Veja o site aqui:
https://pabloquirino.github.io/to-do-list/src/

### Captura de tela:
 ![PrintScreen do projeto](./PrintSc/calculadora.png) 


