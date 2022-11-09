import React, { useEffect, useState } from 'react';
import styles from '../../css/Todo.module.css';
import { BsTrash, BsTrashFill } from 'react-icons/bs';

export default function Todo({ todo, onDelete, onCheck, darkMode }) {
  const handleDelete = () => {
    onDelete(todo.id);
  };
  // // 체크를 누르면
  // const handleCheck = (e) => {
  //   onCheck(e.target.checked, todo.id);
  // };
  const { name, status } = todo;
  const handleChange = () => {
    const status = e.target.checked ? 'completed' : 'active';
  };
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        className={styles.input}
        checked={status === 'completed'} // check가 되면 completed
        onChange={{ ...todo, status: 'completed' }}
      />
      <span
        className={styles.name}
        style={darkMode ? { color: '#DEDEDE' } : {}}
      >
        {name}
      </span>
      <button className={styles.deleteBtn} onClick={handleDelete}>
        <BsTrashFill size="18" color={darkMode ? '#DEDEDE' : '#595959'} />
      </button>
    </>
  );
}
