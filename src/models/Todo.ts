const initTodoState = () => ({ title: '' });

export interface ITodo {
    title: string
    description?: string;
}

export default class Todo implements ITodo {
    title: string;
    description?: string;

    constructor({ title = '', description }: ITodo = initTodoState()) {
        this.title = title;
        this.description = description;
    }
}