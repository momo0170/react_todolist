import styles from './App.module.css';
import { BsMoonFill, BsSun } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const onSubmit = (e) => {
    console.log(e);
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
  const onCheck = () => {
    setTodos((prev) => (
      [...prev, prev.forEach((todo) => {
        return { ...todo, check: true };
      });]
    ));
  };
  console.log(todos);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.modeBtn}>
          <BsMoonFill size="18" color="#595959" />
        </button>
        <ul className={styles.filter}>
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </header>
      <main className={styles.main}>
        {todos.map((todo) => (
          <li className={styles.list} key={todo.id}>
            <Todo todo={todo} onDelete={onDelete} onCheck={onCheck} />
          </li>
        ))}
      </main>
      <footer className={styles.footer}>
        <form className={styles.form} onSubmit={onSubmit}>
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
