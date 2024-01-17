import { Data } from '../../types';
import styles from './Card.module.scss';

interface ItemProps extends Omit<Data, 'id'> { }

export const Card = ({ title, count, description }: ItemProps) => {

  let statusClass;

  if (count >= 80) {
    statusClass = styles['status--low'];
  } else if (count >= 50) {
    statusClass = styles['status--medium'];
  } else {
    statusClass = styles['status--high'];
  }

  return (
    <li className={styles.card}>
      <div className={`${styles.status} ${statusClass}`}></div>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.count}>{count}</span>
      </div>
      <div className={styles.description}>{description}</div>
    </li>
  );
};
