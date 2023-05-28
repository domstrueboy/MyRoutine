import type { Component } from 'solid-js';
import { createEffect } from 'solid-js';
import styles from './App.module.css';

import MainInput from './components/MainInput';
import BoardArea from './components/BoardArea';

import Board from './models/Board';

const board = new Board();

const App: Component = () => {

  createEffect(() => {
    console.log('todos', board.todos)
  })

  const showBoard = () => {
    console.log('BOARD', board.todos);
  }

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <MainInput addTodo={board.addTodo.bind(board)}/>
      </header>

      <main>
        <BoardArea board={board} />
      </main>

      <button onClick={showBoard}>SHOW BOARD</button>
    </div>
  );
}

export default App;
