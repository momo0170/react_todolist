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
  return (
    <header
      className={styles.header}
      style={darkMode ? { backgroundColor: '#373737' } : {}}
    >
      <button className={styles.modeBtn} onClick={changeMode}>
        {darkMode ? (
          <BsSunFill size="18" color="#DEDEDE" />
        ) : (
          <BsMoonFill size="18" color="#595959" />
        )}
      </button>
      <ul className={styles.filter}>
        {filters.map((filter, index) => (
          <li
            style={darkMode ? { color: '#DEDEDE' } : { color: '#595959' }}
            key={index}
            onClick={() => onFilterChange(value)}
          >
            {filter}
          </li>
        ))}
      </ul>
    </header>
  );
}
