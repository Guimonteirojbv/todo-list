


const btnAdd = document.getElementById('btn-add');
const containerTasks = document.querySelector('.wrapper-tasks');



class Form {
    public form = document.getElementById('form')
    private _input = document.getElementById('inputTask') as HTMLInputElement;
    private _wrapperTasks = document.querySelector('.wrapper-tasks');

    constructor() {
        this.form?.addEventListener('submit', (e) => this.handleSubmit(e))
    }


   public  handleSubmit(e: Event) {
        e.preventDefault();
        const value = this.getInputValue();

       if (value && this._input) {
            this.addTask(value);
            this._input.value = '';
       }

   }

    private getInputValue() {
        if(this._input instanceof HTMLInputElement) {
            const value = this._input.value.trim();

            return value
        }   
    }

    private addTask(task: string) {
        if(task) {

            const taskWrapper = document.createElement('div');
            taskWrapper.classList.add('task-wrapper');


            const buttonsActions = document.createElement('div');

            const icon = document.createElement('img')
            icon.src = './assets/images/trash.png'

            const buttonDelete = document.createElement('button');
            buttonDelete.classList.add('btn-delete');
            buttonDelete.appendChild(icon) 
            buttonDelete.addEventListener('pointerdown', (e) => this.removeTask(e))

            buttonsActions.appendChild(buttonDelete);

            




            const taskElement = document.createElement('span');

            taskElement.innerText = task;

            taskWrapper.appendChild(taskElement);
            taskWrapper.appendChild(buttonsActions);

            this._wrapperTasks?.appendChild(taskWrapper);
        }
    }

    public removeTask(e: Event) {
        const buttonClicked = e.target as HTMLElement;
        const taskWrapper = buttonClicked.closest('.task-wrapper');

        if (taskWrapper) {
            taskWrapper.remove();
        }
    }

}

const form = new Form()

btnAdd?.addEventListener('pointerdown', form.handleSubmit)