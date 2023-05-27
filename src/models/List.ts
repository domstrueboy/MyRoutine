import ToDo, { ToDoConstructorProps } from './ToDo';

export interface ListConstructorProps {
    title?: string
    description?: string;
}

export default class List {
    title?: string;
    description?: string;
    items: ToDo[];

    constructor({ title, description }: ListConstructorProps) {
        this.title = title;
        this.description = description;
        this.items = [];
    }

    add(input: ToDo): void;
    add(input: ToDoConstructorProps): void {
        const doInstance = (input instanceof ToDo)
            ? input
            : new ToDo(input);
        this.items.push(doInstance);
    }
}