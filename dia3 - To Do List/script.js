 const form = document.getElementById('form');
        const taskInput = document.getElementById('task');
        const taskList = document.getElementById('task-list');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const task = taskInput.value;
            if (task) {
            
                // cria um novo item de lista
                const li = document.createElement('li');
                const deleteButton = document.createElement('button');
                const editButton = document.createElement('button');
                const checkButton = document.createElement('input');
                checkButton.type = 'checkbox';
                const btnGroup = document.createElement('div');
                btnGroup.classList.add('btn-group');
                btnGroup.appendChild(checkButton);
                btnGroup.appendChild(editButton);
                btnGroup.appendChild(deleteButton);
                li.appendChild(btnGroup);
                taskList.appendChild(li);   

                // adiciona o evento de clique para o botão de edição e o botão de exclusão
                editButton.addEventListener('click', function() {
                    const newTask = prompt('Edit your task:', li.firstChild.textContent);       
                    if (newTask) {
                        li.firstChild.nodeValue = newTask;
                    }
                });
                deleteButton.addEventListener('click', function() {
                    taskList.removeChild(li);
                });
                checkButton.addEventListener('click', function() {
                    li.classList.toggle('checked');
                    checkButton.insertBefore(li);
                    
                });

                // coloca o texto dos botões
                editButton.textContent = 'Edit';
                deleteButton.textContent = 'X';

                // adiciona classes aos botões
                deleteButton.classList.add('deleteBtn');
                editButton.classList.add('editBtn');
                checkButton.classList.add('checkBtn');

                // adiciona o texto da tarefa e os botões à lista
                li.textContent = task;
                li.appendChild(checkButton);
                li.appendChild(editButton);
                li.appendChild(deleteButton);
                taskList.appendChild(li);
                taskInput.value = '';
            }

            
        });

       
