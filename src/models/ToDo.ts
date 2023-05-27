export interface ToDoConstructorProps {
    title: string
    description?: string;
}

export default class ToDo {
    title: string;
    description?: string;

    constructor({ title = '', description }: ToDoConstructorProps) {
        this.title = title;
        this.description = description;
    }
}