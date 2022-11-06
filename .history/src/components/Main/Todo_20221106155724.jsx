import React, { useEffect, useState } from 'react';
import styles from '../../css/Todo.module.css';
import { BsTrash, BsTrashFill } from 'react-icons/bs';

export default function Todo({ todo, onDelete, onCheck, darkMode }) {
  const handleDelete = () => {
    onDelete(todo.id);
  };
  // 체크를 누르면
  const handleCheck = (e) => {
    onCheck(e.target.checked, todo.id);
  };

  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        className={styles.input}
        onClick={handleCheck}
      />
      <span className={styles.name} style={darkMode ? { color: 'white' } : {}}>
        {todo.name}
      </span>
      <button
        className={styles.deleteBtn}
        onClick={handleDelete}
        style={darkMode ? { backgroundColor: '#212121' } : {}}
      >
        <BsTrashFill size="18" color={darkMode ? 'white' : '#595959'} />
      </button>
    </>
  );
}
