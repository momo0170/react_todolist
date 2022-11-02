import React from 'react';
import styles from '../css/Todo.module.css';
import { BsTrash, BsTrashFill } from 'react-icons/bs';

export default function Todo({ todo, onDelete }) {
  const handleDelete = () => {
    onDelete(todo.id);
  };
  return (
    <>
      <input type="checkbox" className={styles.input} />
      <label htmlFor="checkbox"></label>
      <span className={styles.name}>{todo.name}</span>
      <button className={styles.deleteBtn} onClick={handleDelete}>
        <BsTrashFill size="18" color="#595959" />
      </button>
    </>
  );
}
