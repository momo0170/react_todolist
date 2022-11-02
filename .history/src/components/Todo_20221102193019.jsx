import React, { useEffect, useState } from 'react';
import styles from '../css/Todo.module.css';
import { BsTrash, BsTrashFill } from 'react-icons/bs';

export default function Todo({ todo, onDelete, setTodos, todos }) {
  // const [isChecked, setIsChecked] = useState(false);
  const handleDelete = () => {
    onDelete(todo.id);
  };
  // 체크를 누르면
  const handleCheck = (e) => {
    console.log(e);
    setTodos([
      ...todos.filter((todo) => {
        todo.checked == true;
      }),
    ]);
  };

  console.log(isChecked);
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        className={styles.input}
        onClick={handleCheck}
      />
      <span className={styles.name}>{todo.name}</span>
      <button className={styles.deleteBtn} onClick={handleDelete}>
        <BsTrashFill size="18" color="#595959" />
      </button>
    </>
  );
}
