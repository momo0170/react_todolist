import styles from './App.module.css';
import { useEffect, useRef, useState } from 'react';

import Header from './components/Header/Header';

function App() {
  const [filter, setFilter] = useState('all');
  const [todos, setTodos] = useState([]);

  const onAdd = (e) => {
    e.preventDefault();
    if (e.target[0].value !== '') {
      setTodos([
        ...todos,
        { id: todos.length + 1, name: e.target[0].value, checked: false },
      ]);
      e.target[0].value = '';
    }
  };

  const onChange = (e) => {
    // console.log(e.target.value);
  };
  const onDelete = (targetId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== targetId));
  };
  const onCheck = (targetChecked, targetId) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === targetId) {
          return { ...todo, checked: targetChecked };
        } else {
          return todo;
        }
      })
    );
  };

  console.log(todos);

  return (
    <div className={styles.container}>
      <Header />

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
    </div>
  );
}

export default App;
