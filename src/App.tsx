import type {Component} from 'solid-js';
import styles from './App.module.css';

import MainInput from './components/MainInput';
import BoardArea from './components/BoardArea';

import {getBoardSaver} from './lib/localstorage';
import {subscribe} from './lib/signalify';

import {board} from './index';

setTimeout(() => {
	subscribe(getBoardSaver(board));
});

const App: Component = () => (
	<div class={styles.App}>

		<header class={styles.header}>
			<MainInput addTodo={board.addTodo.bind(board)}/>
		</header>

		<main>
			<BoardArea board={board} />
		</main>

	</div>
);

export default App;
