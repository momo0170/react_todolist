import styles from './App.module.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  const [darkMode, setDarkMode] = useState(false);
  // todos 변경이 발생할 때마다 console.log 계속 실행됨
  // 초기값이 전달되는데 내부적으로 저장된 값이 있다면 초기값을 무시하고 내부적인 값을 사용한다. 그래서 useState 내부에 함수를 사용할 경우에 콜백 함수로 사용하는 것이 좋다.
  const [todos, setTodos] = useState(() => {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
  });

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
  // todos가 업데이트 될 때마다 localStorage의 값도 업데이트
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
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
