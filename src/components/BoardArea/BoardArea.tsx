import type { Component } from 'solid-js';
import { For } from 'solid-js';
import styles from './BoardArea.module.css';

import Board from '../../models/Board';

const BoardArea: Component<{ board: Board }> = (props) => {
  return (
    <div class={styles.ListsArea}>
      
      <For
        each={props.board.todos}
        fallback={<div>No todos</div>}
      >
        {(todo) => <div>{todo.title}</div>}
      </For>

      <h3>{ JSON.stringify(props.board.lists) }</h3>
    </div>
  );
}

export default BoardArea;