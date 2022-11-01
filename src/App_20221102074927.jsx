import styles from './App.module.css';
import { BsMoonFill, BsSun, BsTrash, BsTrashFill } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const listRef = useRef(null);
  const inputRef = useRef();
  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    // if (e.target[0].value !== '') {
    //   setTodos((prev) => [
    //     ...prev,
    //     { id: prev.length + 1, name: e.target[0].value },
    //   ]);
    // }
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setTodos((prev) => [
      ...prev,
      { id: prev.length + 1, name: e.target[0].value },
    ]);
  };
  const onDelete = (targetId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== targetId));
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
          <li
            className={styles.list}
            key={todo.id}
            ref={todo.id === todos.length ? listRef : null}
          >
            <Todo
              todo={todo}
              onDelete={onDelete}
              BsTrash={BsTrash}
              BsTrashFill={BsTrashFill}
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
            ref={inputRef}
            value={todos.name}
          />
          <button className={styles.addBtn}>Add</button>
        </form>
      </footer>
    </div>
  );
}

export default App;
