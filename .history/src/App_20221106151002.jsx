import styles from './App.module.css';
import { useEffect, useRef, useState } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

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
      <Main />
      <Footer onAdd={onAdd} />
    </div>
  );
}

export default App;
