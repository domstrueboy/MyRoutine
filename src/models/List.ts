import Todo, { ITodo } from './Todo';

const initListState = () => ({ todos: [] });

export interface IList {
    title?: string
    description?: string;
    todos: Todo[];
}

export default class List implements IList {
    title?: string;
    description?: string;
    todos: Todo[];

    constructor({ title, description, todos = [] }: IList = initListState()) {
        this.title = title;
        this.description = description;
        this.todos = todos;
    }

    add(input: Todo): void;
    add(input: ITodo): void {
        const doInstance = (input instanceof Todo)
            ? input
            : new Todo(input);
        this.todos.push(doInstance);
    }
}