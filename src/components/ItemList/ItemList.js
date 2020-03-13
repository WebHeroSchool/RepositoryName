import React from 'react';
import Item from '../Item/Item'
import styles from './ItemList.module.css'

const ItemList = ({items, onClickDone, onClickDelite}) => (<div>
  <ul className={styles.marker}>
    {items.map(item =>
      <li className={styles.mark} key={item.value}>
        <Item value={item.value} isDone={item.isDone} id={item.id}  onClickDone={onClickDone}  onClickDelite={onClickDelite}/>
      </li>)}
  </ul>
  </div>
);

export default ItemList;

