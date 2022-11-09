import styles from '../../css/Header.module.css';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { useDarkMode } from '../../context/DarkModeContext';

const fontColorDark = '#595959';
const fontColorLight = '#DEDEDE';
export default function Header({ filters, filter, onFilterChange }) {
  const changeMode = () => {
    onChangeMode();
  };
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header
      className={styles.header}
      style={darkMode ? { backgroundColor: '#373737' } : {}}
    >
      <button className={styles.modeBtn} onClick={changeMode}>
        {darkMode ? (
          <BsSunFill size="18" color={fontColorLight} />
        ) : (
          <BsMoonFill size="18" color={fontColorDark} />
        )}
      </button>
      <ul className={styles.filter}>
        {filters.map((value, index) => (
          <li
            className={`${styles.filterList} ${
              filter === value && styles.selected
            }`}
            style={
              darkMode ? { color: fontColorLight } : { color: fontColorDark }
            }
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
