import React from 'react';
import styles from '../../css/Footer.module.css';
export default function Footer({ onAdd }) {
  return (
    <footer className={styles.footer}>
      <form className={styles.form} onSubmit={onAdd}>
        <input type="text" placeholder="Add Todo" className={styles.input} />
        <button className={styles.addBtn}>Add</button>
      </form>
    </footer>
  );
}
