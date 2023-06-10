import {signal, reactive} from '../lib/signalify';
import {nanoid} from 'nanoid';

const getId = () => `todo_${nanoid(3)}`;

const initTodoState = () => ({title: 'No title'});

type TodoConstructorI = {
	title: string;
	description?: string;
};

export type TodoI = {
	id: string;
	isDone: boolean;
} & TodoConstructorI;

@reactive
export default class Todo implements TodoI {
	@signal id: string;
	@signal title: string;
	@signal description?: string;
	@signal isDone: boolean;

	constructor({
		title = 'No title',
		description,
	}: TodoConstructorI = initTodoState()) {
		this.id = getId();
		this.title = title;
		this.description = description;
		this.isDone = false;
	}

	toggleDone() {
		this.isDone = !this.isDone;
	}
}
