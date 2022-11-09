import styles from '../../css/Todo.module.css';
import { BsTrashFill } from 'react-icons/bs';

export default function Todo({ todo, onDelete, onUpdate }) {
  const { name, status } = todo;
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        className={styles.input}
        checked={status === 'completed'} // check가 되면 completed
        onChange={handleChange}
      />
      <span className={styles.name}>{name}</span>
      <button className={styles.deleteBtn} onClick={handleDelete}>
        <BsTrashFill size="18" className={styles.deleteIcon} />
      </button>
    </>
  );
}
