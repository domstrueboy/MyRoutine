import List, { IList } from './List';
import Sheet from './Sheet';

const initBoardState = () => ({ todos: [], sheets: [] });

export interface IBoard extends IList {
    sheets: Sheet[];
}

export default class Board extends List implements IBoard {
    sheets: Sheet[];

    constructor({ todos = [], sheets = [] }: IBoard = initBoardState()) {
        super({ todos });
        this.sheets = sheets;
    }
}