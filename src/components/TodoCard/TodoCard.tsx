import type { Component } from 'solid-js';
import styles from './TodoCard.module.css';

import Todo from '../../models/Todo';

const TodoCard: Component<{ todo: Todo, deleteTodo: Function }> = (props) => {
  return (
    <li class={styles.TodoCard}>
      <span class={styles.TodoTitle}>{props.todo.title}</span>
      <button>✔️</button>
      <button onClick={() => props.deleteTodo(props.todo.id)}>❌</button>
    </li>
  );
}

export default TodoCard;