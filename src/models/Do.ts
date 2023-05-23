export interface DoConstructorProps {
    title: string
    description?: string;
}

export default class Do {
    title: string;
    description?: string;

    constructor({ title = '', description }: DoConstructorProps) {
        this.title = title;
        this.description = description;
    }
}