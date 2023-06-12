import type {Component} from 'solid-js';
import styles from './App.module.css';

import MainInput from './components/MainInput';
import BoardArea from './components/BoardArea';

import {board} from './index';

import {subscribe as subscribeOnSignal} from './lib/signalify';

subscribeOnSignal(log);

function log() {
	console.log('BOARD', board);
}

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
