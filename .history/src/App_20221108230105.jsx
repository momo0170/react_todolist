import styles from './App.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';

function App() {
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);
  const [todos, setTodos] = useState([]);

  const onAdd = (e) => {
    e.preventDefault();
    if (e.target[0].value !== '') {
      setTodos([
        ...todos,
        { id: uuidv4(), name: e.target[0].value, checked: false },
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
  const onChangeMode = () => {
    setDarkMode(!darkMode);
  };
  const handleLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  useEffect(() => {
    if (todos.length === 0 && Array.isArray(todos)) {
      localStorage.getItem('todos');
    } else {
      localStorage.setItem('todos', todos);
    }
  }, [todos]);
  console.log(todos);

  return (
    <div className={styles.container}>
      <Header onChangeMode={onChangeMode} darkMode={darkMode} />
      <Main
        onDelete={onDelete}
        todos={todos}
        onCheck={onCheck}
        darkMode={darkMode}
      />
      <Footer onAdd={onAdd} darkMode={darkMode} />
    </div>
  );
}

export default App;
