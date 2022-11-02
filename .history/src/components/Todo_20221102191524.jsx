import React, { useEffect, useState } from 'react';
import styles from '../css/Todo.module.css';
import { BsTrash, BsTrashFill } from 'react-icons/bs';

export default function Todo({ todo, onDelete, setTodos, todos }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleDelete = () => {
    onDelete(todo.id);
  };
  const handleCheck = (e) => {
    console.log(e);
    setIsChecked();
  };

  // 체크박스를 누를 때마다 실행
  useEffect(() => {
    if (isChecked == true) {
      console.log('체크표시');
    } else {
      console.log('체크해제');
    }
  }, [isChecked]);

  console.log(isChecked);
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        className={styles.input}
        onClick={handleCheck}
        on
      />
      <span className={styles.name}>{todo.name}</span>
      <button className={styles.deleteBtn} onClick={handleDelete}>
        <BsTrashFill size="18" color="#595959" />
      </button>
    </>
  );
}
