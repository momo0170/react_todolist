import React from 'react';
import styles from '../../css/Main.module.css';
import Todo from './Todo';

export default function Main({ onDelete, onCheck, todos, darkMode }) {
  return (
    <main className={styles.main} style={darkMode ? {backgroundColor: "#616161" : ""}>
      {todos.map((todo) => (
        <li className={styles.list} key={todo.id}>
          <Todo todo={todo} onDelete={onDelete} onCheck={onCheck} />
        </li>
      ))}
    </main>
  );
}
