import {type BoardI} from '../../models/Board';

const keys: Array<keyof BoardI> = ['todos'/*, 'sheets'*/];

export const getBoardInitState = (): BoardI => {
	return keys.reduce((obj, key) => {
		const rawValue = localStorage.getItem(key);
		let value;
		try {
			value = rawValue ? JSON.parse(rawValue) : [];
		} catch (err) {
			value = [];
			console.error(`Error while reading and parsing ${key} from localstorage`);
		}
		return {
			...obj,
			[key]: value,
		};
	}, {} as BoardI);
}

export const getBoardSaver = (board: BoardI) => () => {
	keys.forEach((key) => {
		try {
			localStorage.setItem(key, JSON.stringify(board[key]));
		} catch (err) {
			console.error(`Error while stringify and writing ${key} to localstorage`);
		}
	});
}
