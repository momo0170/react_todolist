import styles from '../../css/Header.module.css';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

export default function Header({
  onChangeMode,
  darkMode,
  filters,
  filter,
  onFilterChange,
}) {
  const changeMode = () => {
    onChangeMode();
  };
  const fontColor = '#595959';
  return (
    <header
      className={styles.header}
      style={darkMode ? { backgroundColor: '#373737' } : {}}
    >
      <button className={styles.modeBtn} onClick={changeMode}>
        {darkMode ? (
          <BsSunFill size="18" color="#DEDEDE" />
        ) : (
          <BsMoonFill size="18" color={fontColor} />
        )}
      </button>
      <ul className={styles.filter}>
        {filters.map((value, index) => (
          <li
            className={`${styles.filterList} ${
              filter === value && darkMode ? styles.selected : { s }
            }`}
            style={darkMode ? { color: '#DEDEDE' } : { color: fontColor }}
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
