import List from './List';

export interface ListsConstructorProps {
    items: List[];
}

export default class Lists /* implements ListsConstructorProps */ {
    items: string[];

    constructor(lists: string[] = []) {
        this.items = lists;
    }
}