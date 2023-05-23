import Do, { DoConstructorProps } from './Do';

export interface ListConstructorProps {
    title?: string
    description?: string;
}

export default class List {
    title?: string;
    description?: string;
    items: Do[];

    constructor({ title, description }: ListConstructorProps) {
        this.title = title;
        this.description = description;
        this.items = [];
    }

    add(input: Do): void;
    add(input: DoConstructorProps): void {
        const todo = (input instanceof Do)
            ? input
            : new Do(input);
        this.items.push(todo);
    }
}