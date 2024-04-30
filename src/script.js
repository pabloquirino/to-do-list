class ToDo {

    constructor() {
        this.totalTasks = document.querySelectorAll('.task').length
    }

    addTask(taskText) {
        
        //clonar template
        let template = document.querySelector('.task').cloneNode(true)
        //remover classe hidden
        template.classList.remove('hidden')
        //manipular texto
        let templateText = template.querySelector('.task-title')
        templateText.textContent = taskText

        let list = document.querySelector('#tasks-conteiner')

        //inserir na lista
        list.appendChild(template)

        //adiciona evento as task
        this.addEvents()

        this.checkTasks('add') //chamando método para add ou remover mensagem final
    }

    removeTask(task) {
        
        //achar o elemento pai
        let parentElement = task.parentElement //elemento pai de 'task'

        //remover da lista
        parentElement.remove()

        this.checkTasks('remove') //chamando método para add ou remover mensagem final
    }

    completeTask(done) {

        done.classList.toggle('bg-green-500')

    }

    addEvents() {

        let removeBtn = document.querySelector('.task:last-child .fa-trash') //seleciona o último botão de remoção

        let DoneBtn = document.querySelector('.task:last-child .fa-check') //seleciona o último botão de conclusão

        //adicionar evento de remover
        removeBtn.addEventListener('click', function() {
            toDo.removeTask(this)
        })

        //adicionar evento de completar tarefa
        DoneBtn.addEventListener('click', function() {
            toDo.completeTask(this)
        })

    }

    checkTasks(command) {

        let msg = document.querySelector('#empty-tasks')

        //lógica de adicionar ou remover tasks
        if(command === 'add') {
            this.totalTasks += 1
        }
        else if (command === 'remove') {
            this.totalTasks -= 1
        }

        if(this.totalTasks == 1) {
            msg.classList.remove('hidden')
        }
        else {
            msg.classList.add('hidden')
        }

    }
}

let toDo = new ToDo()

//events
let addBtn = document.querySelector('#add')

addBtn.addEventListener('click', function(e) {

    e.preventDefault()

    let taskText = document.querySelector('#task')

    if(taskText.value.length > 0) {
        toDo.addTask(taskText.value)
    }

    taskText.value = ''
    taskText.focus()

})