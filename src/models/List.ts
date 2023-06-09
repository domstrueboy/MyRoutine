import { signal, reactive } from '../lib/signalify';
import Todo, { ITodo } from './Todo';

const initListState = () => ({ todos: [] });

export interface IList {
    todos: Todo[];
}

@reactive
export default class List implements IList {
    @signal todos: Todo[];

    constructor({ todos = [] }: IList = initListState()) {
        this.todos = todos;
    }

    addTodo(input: Todo): void;
    addTodo(input: ITodo): void {
        const doInstance = (input instanceof Todo)
            ? input
            : new Todo(input);
        this.todos = [doInstance, ...this.todos];
    }
}