
const btnAdd = document.getElementById('btn-add');
const containerTasks = document.querySelector('.wrapper-tasks');


class Form {
    public form = document.getElementById('form')
    private _input = document.getElementById('inputTask');
    private _wrapperTasks = document.querySelector('.wrapper-tasks');

    constructor() {
        this.form?.addEventListener('submit', (e) => this.handleSubmit(e))
    }


   public  handleSubmit(e: Event) {
        e.preventDefault();
        const value = this.getInputValue();

       if (value) {
            this.addTask(value);
            this._input?.value = '';
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

            const buttonDelete = document.createElement('button');
            buttonDelete.classList.add('btn-delete');
            buttonDelete.innerText = 'Delete'

            buttonsActions.appendChild(buttonDelete);

            




            const taskElement = document.createElement('span');

            taskElement.innerText = task;

            taskWrapper.appendChild(taskElement);
            taskWrapper.appendChild(buttonsActions);

            this._wrapperTasks?.appendChild(taskWrapper);
        }
    }

}

const form = new Form()

btnAdd?.addEventListener('pointerdown', form.handleSubmit)