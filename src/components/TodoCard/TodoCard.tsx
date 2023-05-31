import type { Component } from 'solid-js';
import styles from './TodoCard.module.css';

import Todo from '../../models/Todo';

const TodoCard: Component<{ todo: Todo }> = (props) => {
  return (
    <li class={styles.TodoCard}>
      <span class={styles.TodoTitle}>{props.todo.title}</span>
      <button>✔️</button>
      <button>❌</button>
    </li>
  );
}

export default TodoCard;