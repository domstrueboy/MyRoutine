import { signal, reactive } from '../lib/signalify';

import Todo, { ITodo } from './Todo';
import List from './List';

const initBoardState = () => ({ todos: [], lists: [] });

export interface IBoard {
    todos: Todo[];
    lists: List[];
}

@reactive
export default class Board implements IBoard {
    @signal todos: Todo[];
    lists: List[];

    constructor({ todos = [], lists = [] }: IBoard = initBoardState()) {
        this.todos = todos;
        this.lists = lists;
    }

    addTodo(input: Todo): void;
    addTodo(input: ITodo): void {
        const doInstance = (input instanceof Todo)
            ? input
            : new Todo(input);
        this.todos.push(doInstance);
    }
}