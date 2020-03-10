import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';

const InputItem = () => (<div className={styles.flex}>
  <div className={styles.size}>
    <TextField
      id="standard-textarea"
      label="Введи дело:"
      placeholder="Дело"
      fullWidth
      margin="normal"
    />   
  </div>
  <button>Добавить</button>
</div>);

export default InputItem;