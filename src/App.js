import React, { Component } from 'react';
import Cards from './components/Cards/Cards';
import Charts from './components/Chart/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';
import { fetchData} from './api/'
import './App.css';


 class App extends Component {
async componentDidMount() {
  const data = await fetchData();
  console.log(data)
}

  render() {
    return (
    <div className='container'>
       
        <Cards/>
        <CountryPicker/>
        <Charts/>
        

      </div>
    )
  }
}

export default App

