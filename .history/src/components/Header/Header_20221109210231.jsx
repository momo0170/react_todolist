import styles from '../../css/Header.module.css';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { darkModeContext } from '../../context/DarkModeContext';
import { useContext } from 'react';

const fontColorDark = '#595959';
const fontColorLight = '#DEDEDE';
export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useContext(darkModeContext);
  return (
    <header className={styles.header}>
      <button className={styles.modeBtn} onClick={toggleDarkMode}>
        {darkMode ? <BsSunFill size="18" /> : <BsMoonFill size="18" />}
      </button>
      <ul className={styles.filter}>
        {filters.map((value, index) => (
          <li
            className={`${styles.filterList} ${
              filter === value && styles.selected
            }`}
            key={index}
            onClick={() => onFilterChange(value)}
          >
            {value}
          </li>
        ))}
      </ul>
    </header>
  );
}
