import styles from '../../css/Header.module.css';
import { BsMoonFill, BsSun } from 'react-icons/bs';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <button className={styles.modeBtn}>
          <BsMoonFill size="18" color="#595959" />
        </button>
        <ul className={styles.filter}>
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </header>
    </>
  );
}
