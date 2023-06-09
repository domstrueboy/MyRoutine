import {signal} from '../lib/signalify';
import Todo, {type TodoI} from './Todo';

const initListState = () => ({todos: []});

export type ListI = {
	todos: Todo[];
};

export default class List implements ListI {
	@signal todos: Todo[];

	constructor({todos = []}: ListI = initListState()) {
		this.todos = todos.map(todo => {
			return (todo instanceof Todo)
			? todo
			: new Todo(todo);
		});
	}

	addTodo(input: Todo): void;
	addTodo(input: TodoI): void {
		const todoInstance = (input instanceof Todo)
			? input
			: new Todo(input);
		this.todos = [todoInstance, ...this.todos];
	}

	deleteTodo(id?: string): void {
		const index = this.#findTodoIndexById(id);
		if (index >= 0) {
			this.todos = [...this.todos.toSpliced(index, 1)];
		}
	}

	#findTodoIndexById(id?: string) {
		return this.todos.findIndex(todo => todo.id === id);
	}

	#findTodoInstanceById(id?: string) {
		return this.todos.find(todo => todo.id === id);
	}
}
