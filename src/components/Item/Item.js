import React from 'react';
import classnames from 'classnames'
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import styles from './Item.module.css'

const Item = ({value, isDone, onClickDone, id, onClickDelite}) => (<div className={styles.wrap}>
  <div onClick={() => onClickDone(id)}>
  <Checkbox
    value="primary"
    inputProps={{ 'aria-label': 'primary checkbox' }}
    checked={isDone}
    onClick={()=>onClickDone(isDone)}
 />
  <span className={
    classnames({
      [styles.item]: true,
      [styles.done]: isDone
    })
  }>
  {value}
  </span>
  </div>
    <IconButton aria-label="delete" onClick={() => onClickDelite(id)} >
      <DeleteIcon />
    </IconButton>
</div>)

export default Item;