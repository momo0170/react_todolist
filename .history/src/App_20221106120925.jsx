import styles from './App.module.css';
import { BsMoonFill, BsSun } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [filter, setFilter] = useState('all');
  const [todos, setTodos] = useState([]);
  const [all, setAll] = useState([]);
  const [active, setActive] = useState([]);
  const [completed, setCompleted] = useState([]);
  const onSubmit = (e) => {
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
  const clickAll = () => {
    setFilter('all');
    setAll(todos);
  };
  const clickActive = () => {
    setFilter('active');
    setActive(todos.filter((todo) => todo.checked === false));
  };
  const clickCompleted = () => {
    setFilter('completed');
    setCompleted(todos.filter((todo) => todo.checked === true));
  };
  console.log(todos);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.modeBtn}>
          <BsMoonFill size="18" color="#595959" />
        </button>
        <ul className={styles.filter}>
          <li onClick={clickAll}>All</li>
          <li onClick={clickActive}>Active</li>
          <li onClick={clickCompleted}>Completed</li>
        </ul>
      </header>
      <main className={styles.main}>
        {filter === 'active'
          ? active.map((todo) => (
              <li className={styles.list} key={todo.id}>
                <Todo
                  todo={todo}
                  onDelete={onDelete}
                  onCheck={onCheck}
                  setIsChecked={setIsChecked}
                  isChecked={isChecked}
                />
              </li>
            ))
          : filter === 'completed'
          ? completed.map((todo) => (
              <li className={styles.list} key={todo.id}>
                <Todo
                  todo={todo}
                  onDelete={onDelete}
                  onCheck={onCheck}
                  setIsChecked={setIsChecked}
                  isChecked={isChecked}
                />
              </li>
            ))
          : todos.map((todo) => (
              <li className={styles.list} key={todo.id}>
                <Todo
                  todo={todo}
                  onDelete={onDelete}
                  onCheck={onCheck}
                  setIsChecked={setIsChecked}
                  isChecked={isChecked}
                />
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
