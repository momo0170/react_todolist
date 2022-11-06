import styles from './App.module.css';
import { BsMoonFill, BsSun } from 'react-icons/bs';
import { useEffect, useRef, useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [filter, setFilter] = useState('');
  const [todos, setTodos] = useState([]);
  const [todosActive, setTodosActive] = useState([]);
  const [todosCompleted, setTodosCompleted] = useState([]);
  const [todosAll, setTodosAll] = useState([]);
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

  const onDelete = (targetId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== targetId));
  };
  const onCheck = (isChecked, targetId) => {
    console.log(isChecked);
    setTodos((prev) =>
      prev.map((todo) => {
        // 클릭한 컴포넌트와 id가 같으면 checked 속성 true
        if (todo.id === targetId) {
          return { ...todo, checked: isChecked };
        }
        return todo;
      })
    );
  };
  const handleActive = () => {
    const active = todos.filter((todo) => todo.checked === false);
    console.log(active);
    setTodosActive(active);
  };
  const handleAll = () => {
    const all = todos;
    setTodosAll(all);
  };
  const handleCompleted = () => {
    const completed = todos.filter((todo) => todo.checked === true);
    console.log(completed);
    setTodosCompleted(completed);
  };

  console.log(todos);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.modeBtn}>
          <BsMoonFill size="18" color="#595959" />
        </button>
        <ul className={styles.filter}>
          <li onClick={handleAll}>All</li>
          <li onClick={handleActive}>Active</li>
          <li onClick={handleCompleted}>Completed</li>
        </ul>
      </header>
      <main className={styles.main}>
        {todos.map((todo) => {
          if (todo.checked === true) {
            <li className={styles.list} key={todo.id}>
              <Todo todo={todo} onDelete={onDelete} onCheck={onCheck} />
            </li>;
          }
        })}
      </main>
      <footer className={styles.footer}>
        <form className={styles.form} onSubmit={onAdd}>
          <input type="text" placeholder="Add Todo" className={styles.input} />
          <button className={styles.addBtn}>Add</button>
        </form>
      </footer>
    </div>
  );
}

export default App;
