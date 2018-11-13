import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: ''
    }
  }
  
  componentDidMount = () => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
        response.data.forEach(country => country.matchSearch = true) 
        this.setState({ countries: response.data })
    })
  } 

  handleFilterChange = (event) => {
    this.setState({filter: event.target.value})
    let countries = [...this.state.countries]
    if(event.target.value !== '') {    
        countries.forEach(country => {
            country.matchSearch = (country.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1)
        })
    } else {
        countries.forEach(country => {
            country.matchSearch = true
        })
    }
    this.setState({countries})
  }
  
  render() {
    let countriesToShow = this.state.countries.filter(country => country.matchSearch)
    let Results;
    if (countriesToShow.length > 10) {
      Results = () => (
        <p>Too many matches, specify another filter</p>
      )
    } else if (countriesToShow.length === 1) {
      Results = () => (
        <div>
          <h1>{countriesToShow[0].name}</h1>
          <p>Capital: {countriesToShow[0].capital}</p>
          <p>Population: {countriesToShow[0].population}</p>
          <img src={countriesToShow[0].flag} width="200px" alt={countriesToShow[0].name.concat(" Flag")}/> 
        </div>
      )
    } else {
      Results = () => (
        countriesToShow.map(country => {
          return(
            <p key={country.numericCode}>{country.name}</p>
          )
        })
      )
    }
    
    return (
    <div>
      <div>
        rajaa näytettäviä: <input value = {this.state.filter} onChange = {this.handleFilterChange}/>
      </div>
      <Results /> 
    </div> 
    )
  }
}

export default App;
