import type { Component } from 'solid-js';

import styles from './App.module.css';

import MainInput from './components/MainInput';
import ListsArea from './components/ListsArea';

import Lists from './models/Lists';

const lists = new Lists(['list 1', 'list 2']);

const App: Component = () => (
  <div class={styles.App}>
    <header class={styles.header}>
      <MainInput />
      {/* <a
        class={styles.link}
        href="https://github.com/solidjs/solid"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Solid
      </a> */}
    </header>

    <ListsArea lists={lists} />
  </div>
);

export default App;
