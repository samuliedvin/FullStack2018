import React, { Component } from 'react';
import './App.css';

const Statistic = ({name, vote}) => <tr><td>{name}</td><td> {vote}</td></tr>

const Statistics = ({votes}) => {
  if(votes.good + votes.neutral + votes.bad === 0) {
    return (
      <div>
        <h1>Statistiikka</h1>
        <p>Ei yhtään palautetta annettu</p>
      </div>)
  } else {
      return(
      <div>
        <h1>statistiikka</h1>
        <table>
          <tbody>
            <Statistic name = 'hyvä' vote = {votes.good} />
            <Statistic name = 'neutraali' vote = {votes.neutral} />
            <Statistic name = 'huono' vote = {votes.bad} />
            <Statistic name = 'keskiarvo' vote = {votes.average} />
            <Statistic name = 'positiivisia' vote = {votes.positive} />
          </tbody>
        </table>
      </div>
      )  
  } 
}

const Button = ({handleClick, name}) => <button onClick={handleClick}>{name}</button>

class App extends Component {
  constructor() {
    super()
    this.state = {
      good : 0,
      neutral : 0,
      bad : 0,
      average : 0,
      positive : 0
    }
  }

  handleClick = (name) => () => {
      this.setState({ [name] : this.state[name] + 1}, () => this.setAverage()) 
  }

  setAverage = () => {
    let totalVotes = (this.state.good + this.state.neutral + this.state.bad)
    let newAverage = (this.state.good - this.state.bad) / totalVotes
    let newPositive = this.state.good / totalVotes * 100 + "%"
    this.setState({average : newAverage, positive : newPositive}) 
  }

  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
        <Button handleClick={this.handleClick('good')} name = 'hyvä' /> 
        <Button handleClick={this.handleClick('neutral')} name = 'neutraali' /> 
        <Button handleClick={this.handleClick('bad')} name = 'huono' />
        <Statistics votes = {this.state} />
      </div>
    );
  }
}

export default App;
