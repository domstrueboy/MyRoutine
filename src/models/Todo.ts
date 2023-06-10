import {nanoid} from 'nanoid';

const getId = () => `todo_${nanoid(3)}`;

const initTodoState = () => ({id: getId(), title: ''});

export type TodoI = {
	id?: string;
	title: string;
	description?: string;
};

export default class Todo implements TodoI {
	id?: string;
	title: string;
	description?: string;

	constructor({
		id = getId(),
		title = '',
		description,
	}: TodoI = initTodoState()) {
		this.id = id;
		this.title = title;
		this.description = description;
	}
}
