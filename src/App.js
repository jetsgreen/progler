import React, { Component } from 'react';
import Cards from './components/Cards/Cards';
import Charts from './components/Chart/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';
// import { fetchData} from './api/'
import './App.css';
import axios from 'axios';


 class App extends Component {
   state ={
     data:{}
   }
// async componentDidMount() {
//   const data = await fetchData(url);
//   console.log(data)
// }
componentDidMount() {
  axios.get('https://covid19.mathdro.id/api').then(response =>{
  this.setState({data: response.data})
  })
}


  render() {
    return (
    <div className='container'>
       
        <Cards data={this.state.data}/>
        <CountryPicker />
        <Charts/>
        

      </div>
    )
  }
}

export default App

