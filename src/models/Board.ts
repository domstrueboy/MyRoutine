import {reactive} from '../lib/signalify';
import List, {type ListI} from './List';
import type Sheet from './Sheet';

const initBoardState = () => ({todos: [], sheets: []});

export type BoardI = {
	sheets: Sheet[];
} & ListI;

@reactive
export default class Board extends List implements BoardI {
	sheets: Sheet[];

	constructor({todos = [], sheets = []}: BoardI = initBoardState()) {
		super({todos});
		this.sheets = sheets;
	}
}
