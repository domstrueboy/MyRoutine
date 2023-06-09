import List, { IList } from './List';

const initSheetState = () => ({ todos: [] });

export interface ISheet extends IList {
    title?: string
    description?: string;
}

export default class Sheet extends List implements ISheet {
    title?: string;
    description?: string;

    constructor({ title, description, todos = [] }: ISheet = initSheetState()) {
        super({ todos });
        this.title = title;
        this.description = description;
    }
}