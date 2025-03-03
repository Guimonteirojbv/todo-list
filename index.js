var btnAdd = document.getElementById('btn-add');
var containerTasks = document.querySelector('.wrapper-tasks');
var Form = /** @class */ (function () {
    function Form() {
        var _this = this;
        var _a;
        this.form = document.getElementById('form');
        this._input = document.getElementById('inputTask');
        this._wrapperTasks = document.querySelector('.wrapper-tasks');
        (_a = this.form) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) { return _this.handleSubmit(e); });
    }
    Form.prototype.handleSubmit = function (e) {
        var _a;
        e.preventDefault();
        var value = this.getInputValue();
        if (value) {
            this.addTask(value);
            (_a = this._input) === null || _a === void 0 ? void 0 : _a.value = '';
        }
    };
    Form.prototype.getInputValue = function () {
        if (this._input instanceof HTMLInputElement) {
            var value = this._input.value.trim();
            return value;
        }
    };
    Form.prototype.addTask = function (task) {
        var _a;
        if (task) {
            var taskWrapper = document.createElement('div');
            taskWrapper.classList.add('task-wrapper');
            var buttonsActions = document.createElement('div');
            var buttonDelete = document.createElement('button');
            buttonDelete.classList.add('btn-delete');
            buttonDelete.innerText = 'Delete';
            buttonsActions.appendChild(buttonDelete);
            var taskElement = document.createElement('span');
            taskElement.innerText = task;
            taskWrapper.appendChild(taskElement);
            taskWrapper.appendChild(buttonsActions);
            (_a = this._wrapperTasks) === null || _a === void 0 ? void 0 : _a.appendChild(taskWrapper);
        }
    };
    return Form;
}());
var form = new Form();
btnAdd === null || btnAdd === void 0 ? void 0 : btnAdd.addEventListener('pointerdown', form.handleSubmit);
