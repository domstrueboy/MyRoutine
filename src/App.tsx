import type {Component} from 'solid-js';
import styles from './App.module.css';

import MainInput from './components/MainInput';
import BoardArea from './components/BoardArea';

import {syncLocalstorageData} from './lib/localstorage';

import {board} from './index';

import {subscribe} from './lib/signalify';

subscribe(syncLocalstorageData);

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
