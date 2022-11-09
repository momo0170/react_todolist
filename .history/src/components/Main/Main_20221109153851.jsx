import React from 'react';
import styles from '../../css/Main.module.css';
import Todo from './Todo';

export default function Main({
  onDelete,
  onCheck,
  todos,
  darkMode,
  filter,
  onUpdate,
}) {
  const filtered = getFilterdItems(todos, filter);
  return (
    <main
      className={styles.main}
      style={darkMode ? { backgroundColor: '#424242' } : {}}
    >
      {filtered.map((todo) => (
        <li className={styles.list} key={todo.id}>
          <Todo
            todo={todo}
            onDelete={onDelete}
            onCheck={onCheck}
            darkMode={darkMode}
            onUpdate={onUpdate}
          />
        </li>
      ))}
    </main>
  );
}

function getFilterdItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
