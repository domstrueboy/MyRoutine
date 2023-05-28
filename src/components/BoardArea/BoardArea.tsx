import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import styles from './BoardArea.module.css';

import Board from '../../models/Board';

const BoardArea: Component<{ board: Board }> = (props) => {

  const [todos, setTodos] = createSignal(props.board.todos);

  return (
    <div class={styles.ListsArea}>
      <h3>{ JSON.stringify(props.board.todos) }</h3>
      <h3>{ JSON.stringify(todos()) }</h3>
      <h3>{ JSON.stringify(props.board.lists) }</h3>
    </div>
  );
}

export default BoardArea;