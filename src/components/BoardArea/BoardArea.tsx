import type {Component} from 'solid-js';
import {For} from 'solid-js';
import styles from './BoardArea.module.css';

import type Board from '../../models/Board';
import TodoCard from '../../components/TodoCard';

const BoardArea: Component<{board: Board}> = props => (
	<ul class={styles.BoardArea}>

		<For
			each={props.board.todos}
			fallback={<div>No todos</div>}
		>
			{
				todo => <TodoCard
					todo={todo}
					deleteTodo={props.board.deleteTodo.bind(props.board)}
				/>
			}
		</For>

		{/* <h3>{ JSON.stringify(props.board.lists) }</h3> */}
	</ul>
);

export default BoardArea;
