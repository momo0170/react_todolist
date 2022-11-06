import React from 'react';
import styles from '../../css/Footer.module.css';
export default function Footer({ onAdd, darkMode }) {
  return (
    <footer
      className={styles.footer}
      style={darkMode ? { backgroundColor: '#373737' } : {}}
    >
      <form className={styles.form} onSubmit={onAdd}>
        <input type="text" placeholder="Add Todo" className={styles.input} />
        <button className={styles.addBtn}>Add</button>
      </form>
    </footer>
  );
}
