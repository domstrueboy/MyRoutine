import {signal, reactive} from '../lib/signalify';
import {nanoid} from 'nanoid';

const getId = () => `todo_${nanoid(3)}`;

const initTodoState = () => ({title: 'No title'});

export type TodoI = {
	id?: string;
	title: string;
	description?: string;
	isDone?: boolean;
};

@reactive
export default class Todo implements TodoI {
	@signal id: string;
	@signal title: string;
	@signal description?: string;
	@signal isDone: boolean;

	constructor({
		id = getId(),
		title = 'No title',
		description,
		isDone = false,
	}: TodoI = initTodoState()) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.isDone = isDone;
	}

	toggleDone() {
		this.isDone = !this.isDone;
	}
}
