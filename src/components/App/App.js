import React from 'react';
// import InputItem from '../InputItem/InoutItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import './App.css'

const App = () => {
  const items = [
    {
      value: 'Закончить модуль'
    },
    {
      value: 'Закончить модуль за модулем'
    },
    {
      value: 'Работать'
    }
  ];
  
  return (
  <div className="wrap">
    <h1>Важные дела:</h1>
    {/* <InputItem /> */}
    <ItemList items={items}/>
    <Footer count = {3}/>
  </div>);
}

export default App;