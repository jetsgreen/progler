import React, { Component } from 'react';
import Cards from './components/Cards/Cards';
import Charts from './components/Chart/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';
import ButtonAppBar from './components/Navbar/Navbar';
import FixedContainer from './components/Jumbotron/Jumbotron';
import { fetchData} from './api/'
import './App.css';
import axios from 'axios';


 class App extends Component {
   state ={
     data:{},
     country: ''
   }
// async componentDidMount() {
//   const data = await fetchData(url);
//   console.log(data)
// }

handleCountryChange = async (country) => {
// fetch data
 const fetchedData = await fetchData(country);
 console.log(country)
//  set the state
console.log(fetchedData)
//  this.setState({data: fetchedData, country: country})
}


componentDidMount() {
  axios.get('https://covid19.mathdro.id/api').then(response =>{
  this.setState({data: response.data})
  })
}


  render() {
    return (
      
      
    <div className='container'>
      <ButtonAppBar/>
      <FixedContainer/>
        <Cards data={this.state.data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data={this.state.data} country={this.state.country}/>
        

      </div>
    )
  }
}

export default App

