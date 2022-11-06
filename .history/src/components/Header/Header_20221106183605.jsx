import styles from '../../css/Header.module.css';
import { BsMoonFill, BsSun } from 'react-icons/bs';

export default function Header({ onChangeMode, darkMode }) {
  const changeMode = () => {
    onChangeMode();
  };
  return (
    <header
      className={styles.header}
      style={darkMode ? { backgroundColor: '#373737' } : {}}
    >
      <button className={styles.modeBtn} onClick={changeMode}>
        {darkMode ? () : (<BsMoonFill size="18" color={darkMode ? '#DEDEDE' : '#595959'} />)}
        
      </button>
      <ul className={styles.filter}>
        <li style={darkMode ? { color: '#DEDEDE' } : { color: '#595959' }}>
          All
        </li>
        <li style={darkMode ? { color: '#DEDEDE' } : { color: '#595959' }}>
          Active
        </li>
        <li style={darkMode ? { color: '#DEDEDE' } : { color: '#595959' }}>
          Completed
        </li>
      </ul>
    </header>
  );
}
