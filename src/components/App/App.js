import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import styles from './App.module.css'
// import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    items: [
      {
        value: 'Закончить модуль',
        isDone: true,
        id:1
      },
      {
        value: 'Закончить модуль за модулем',
        isDone: false,
        id:2
      },
      {
        value: 'Работать',
        isDone: true,
        id:3
      }
    ]
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item=> {
      const newItem = { ...item};

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({ items: newItemList });
  };

  onClickDelite = id => {
    const delItemElem = this.state.items.filter(item=>item.id !== id);
      this.setState({items: delItemElem});


  };

  render() {
      
      
      return (
      <div className={styles.wrap}>
        <h1>Важные дела:</h1>
        <InputItem />
        <ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDelite= {this.onClickDelite}/>
        <Footer count={this.state.items.length}/>
      </div>);
    }
  };

export default App;