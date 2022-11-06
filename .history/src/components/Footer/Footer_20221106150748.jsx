import React from 'react';
import styles from '../../css/Footer.module.ss';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <form className={styles.form} onSubmit={onAdd}>
        <input
          type="text"
          placeholder="Add Todo"
          className={styles.input}
          onChange={onChange}
        />
        <button className={styles.addBtn}>Add</button>
      </form>
    </footer>
  );
}
