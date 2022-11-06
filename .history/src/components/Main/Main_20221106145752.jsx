import React from 'react';
import styles from '../../css/Main.module.css';
export default function Main() {
  return (
    <main className={styles.main}>
      {todos.map((todo) => (
        <li className={styles.list} key={todo.id}>
          <todo todo={todo} onDelete={onDelete} onCheck={onCheck} />
        </li>
      ))}
    </main>
  );
}
