import styles from '../../css/Header.module.css';
import { BsMoonFill, BsSun } from 'react-icons/bs';

export default function Header({ onChangeMode, darkMode }) {
  const changeMode = () => {
    onChangeMode();
  };
  return (
    <header
      className={styles.header}
      style={darkMode ? { backgroundColor: '#1b1b1b' } : {}}
    >
      <button className={styles.modeBtn} onClick={changeMode}>
        <BsMoonFill size="18" color={darkMode ? 'white' : '#595959'} />
      </button>
      <ul className={styles.filter}>
        <li style={darkMode ? { color: 'white' } : { color: '#595959' }}>
          All
        </li>
        <li style={darkMode ? { color: 'white' } : { color: '#595959' }}>
          Active
        </li>
        <li style={darkMode ? { color: 'white' } : { color: '#595959' }}>
          Completed
        </li>
      </ul>
    </header>
  );
}
