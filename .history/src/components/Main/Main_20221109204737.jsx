import React from 'react';
import styles from '../../css/Main.module.css';
import Todo from './Todo';

export default function Main({ onDelete, onCheck, todos, filter, onUpdate }) {
  const filtered = getFilterdItems(todos, filter);
  return (
    <main className={styles.main}>
      {filtered.map((todo) => (
        <li className={styles.list} key={todo.id}>
          <Todo
            todo={todo}
            onDelete={onDelete}
            onCheck={onCheck}
            onUpdate={onUpdate}
          />
        </li>
      ))}
    </main>
  );
}

// 현재 todos와 어떤 필터인지를 매개변수로 받음
function getFilterdItems(todos, filter) {
  // all이면
  if (filter === 'all') {
    return todos; // 기존에 받아온 todos를 사용
  }
  // active, completed이면
  return todos.filter((todo) => todo.status === filter); // status 속성이 조건에 해당하는 것만 가져옴
}
