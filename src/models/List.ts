import {signal, reactive} from '../lib/signalify';
import Todo, {type TodoI} from './Todo';

const handler = {
	get(target, prop, receiver) {
		console.log('GET', target, prop, receiver);
		return target[prop];
	},
	set(target, prop, val) {
		console.log('SET', target, prop, val);
		target[prop] = val;
		return true;
	},
};

const initListState = () => ({todos: []});

export type ListI = {
	todos: Todo[];
};

@reactive
export default class List implements ListI {
	@signal todos: Todo[];

	constructor({todos = []}: ListI = initListState()) {
		this.todos = new Proxy(todos, handler);
	}

	addTodo(input: Todo): void;
	addTodo(input: TodoI): void {
		const todoInstance = (input instanceof Todo)
			? input
			: new Todo(input);
		console.log('1', this.todos);
		this.todos = [todoInstance, ...this.todos];
		console.log('2', this.todos);
		// console.log('UNSHIFT');
		// this.todos.unshift(todoInstance);
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
