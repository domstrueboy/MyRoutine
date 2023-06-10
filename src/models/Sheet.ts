import List, {type ListI} from './List';

const initSheetState = () => ({todos: []});

export type SheetI = {
	title?: string;
	description?: string;
} & ListI;

export default class Sheet extends List implements SheetI {
	title?: string;
	description?: string;

	constructor({title, description, todos = []}: SheetI = initSheetState()) {
		super({todos});
		this.title = title;
		this.description = description;
	}
}
