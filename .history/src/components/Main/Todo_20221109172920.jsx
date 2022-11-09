import React, { useEffect, useState } from 'react';
import styles from '../../css/Todo.module.css';
import { BsTrashFill } from 'react-icons/bs';

export default function Todo({ todo, onDelete, onUpdate, darkMode }) {
  const { name, status } = todo;
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        className={styles.input}
        checked={status === 'completed'} // check가 되면 completed
        onChange={handleChange}
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
