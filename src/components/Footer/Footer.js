import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ count, onClickFooter }) => 
<div className={styles.wrap} onClick={onClickFooter}>
  <span>Всего заданий: { count } </span>
    <div>
      <button className={styles.button}>Все</button>
      <button className={styles.button}>Активные</button>
      <button className={styles.button}>Выполненные</button>
    </div> 
  <div>
  <button className={styles.button}>Удалить выполненные</button>
  </div>
</div>

export default Footer;