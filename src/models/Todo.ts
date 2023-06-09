import { nanoid } from 'nanoid';

const getId = () => `todo_${nanoid(3)}`;

const initTodoState = () => ({ id: getId(), title: '' });

export interface ITodo {
    id?: string;
    title: string
    description?: string;
}

export default class Todo implements ITodo {
    id?: string;
    title: string;
    description?: string;

    constructor({
        id = getId(),
        title = '',
        description,
    }: ITodo = initTodoState()) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
}