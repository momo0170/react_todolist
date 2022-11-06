import React from 'react';
import styles from '../../css/Footer.module.css';
export default function Footer({ onAdd, darkMode }) {
  return (
    <footer
      className={styles.footer}
      style={darkMode ? { backgroundColor: '#373737' } : {}}
    >
      <form className={styles.form} onSubmit={onAdd}>
        <input
          type="text"
          placeholder="Add Todo"
          className={styles.input}
          style={
            darkMode ? { backgroundColor: '#424242', color: '#F6F6F6' } : {}
          }
        />
        <button className={styles.addBtn}>Add</button>
      </form>
    </footer>
  );
}
