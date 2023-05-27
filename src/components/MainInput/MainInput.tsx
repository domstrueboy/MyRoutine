import type { Component } from 'solid-js';

import styles from './MainInput.module.css';

const MainInput: Component = () => (
  <div class={styles.MainInput}>
    <input type="text" />
  </div>
);

export default MainInput;