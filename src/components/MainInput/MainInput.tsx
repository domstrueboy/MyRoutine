import type { Component } from 'solid-js';
import { createSignal, batch } from 'solid-js';
import styles from './MainInput.module.css';

import Todo from '../../models/Todo';

const MainInput: Component<{ addTodo: (input: Todo) => void }> = (props) => {

  const [newTitle, setTitle] = createSignal('');

  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    batch(() => {
      props.addTodo({ title: newTitle() });
      setTitle('');
    });
  }

  return (
    <form class={styles.MainInput} onSubmit={onSubmit}>

      <input
        autofocus
        required
        value={newTitle()}
        onInput={(e) => setTitle(e.currentTarget.value)}
      />

      {/* <button>+</button> */}

    </form>
  );
}

export default MainInput;