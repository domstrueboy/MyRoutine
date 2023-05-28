import type { Component } from 'solid-js';

import styles from './App.module.css';

import MainInput from './components/MainInput';
import BoardArea from './components/BoardArea';

import Board from './models/Board';

const board = new Board();

const App: Component = () => (
  <div class={styles.App}>
    <header class={styles.header}>
      <MainInput />
    </header>

    <main>
      <BoardArea board={board} />
    </main>
  </div>
);

export default App;
