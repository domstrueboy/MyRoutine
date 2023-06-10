import type {Component} from 'solid-js';
import styles from './TodoCard.module.css';

import type Todo from '../../models/Todo';

const TodoCard: Component<{todo: Todo; deleteTodo: (id?: string) => void}> = props => {
	const deleteTodo = () => {
		props.deleteTodo(props.todo.id);
	};

	return (
		<li class={styles.TodoCard}>
			<span class={styles.TodoTitle}>{props.todo.title}</span>
			<button>✔️</button>
			<button onClick={deleteTodo}>❌</button>
		</li>
	);
};

export default TodoCard;
