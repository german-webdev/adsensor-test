import { Data } from '../../types';
import { Card } from '../Card';
import styles from './ItemList.module.scss';

interface ItemListProps {
  data: Data[]
}

export const ItemList = ({ data }: ItemListProps) => {
  return (
    <ul className={styles.itemList}>
      {data.map((item) => {
        const {id, ...otherProps} = item;
        return <Card {...otherProps} key={id}/>
      })}
    </ul>
  );
};
