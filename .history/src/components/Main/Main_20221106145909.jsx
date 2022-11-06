import React from 'react';
import styles from '../../css/Main.module.css';
import Todo from './Todo';
export default function Main() {
  return (
    <main className={styles.main}>
      {todos.map((todo) => (
        <li className={styles.list} key={todo.id}>
          <Todo todo={todo} onDelete={onDelete} onCheck={onCheck} />
        </li>
      ))}
    </main>
  );
}
