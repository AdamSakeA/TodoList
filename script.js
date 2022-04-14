//ambil data dari HTML
const btnInput = document.querySelector('.input');
const inputTask = document.querySelector('.inputTask');
const newTask = document.querySelector('#tasks');
const todoList = document.querySelector('.todoList');
const alert = document.querySelector('.alertTask');

btnInput.addEventListener('click', () => {
    if(inputTask.value.length === 0){
        alert.innerHTML = `Please Input your Task!`;
        alert.style.color = 'red';
    } else {
        alert.innerHTML = '';
        newTask.innerHTML += `
            <div class="task">
                <span class="taskName">
                    ${inputTask.value}
                </span>
                <button class="btn delete">
                    delete
                </button>
            </div>    
        `;

        const currentTasks = document.querySelectorAll('.delete');

        currentTasks.forEach((del) => {
            del.onclick = function() {
                this.parentNode.remove();
            }
        })
    }
})

