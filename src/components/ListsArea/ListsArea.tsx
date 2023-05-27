import type { Component } from 'solid-js';
import styles from './ListsArea.module.css';

import Lists from '../../models/Lists';

const ListsArea: Component<{ lists: Lists }> = (props) => (
  <div class={styles.ListsArea}>
    <h3>{ props.lists.items }</h3>
  </div>
);

export default ListsArea;