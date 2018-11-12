import React, { Component } from 'react';
import './App.css';

const Statistic = ({name, vote}) => <div>{name} {vote}</div>

const Statistics = ({votes}) => (
  <div>
    <h1>statistiikka</h1>
    <Statistic name = 'hyvä' vote = {votes.good} />
    <Statistic name = 'neutraali' vote = {votes.neutral} />
    <Statistic name = 'huono' vote = {votes.bad} />
    <Statistic name = 'keskiarvo' vote = {votes.average} />
    <Statistic name = 'positiivisia' vote = {votes.positive} />
  </div>
)

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

  goodClick = () => {
    this.setState({ good : this.state.good + 1}, () => this.setAverage()) 
  }
  neutralClick = () => {
    this.setState({ neutral : this.state.neutral + 1}, () => this.setAverage()) 
  }
  badClick = () => {
    this.setState({ bad : this.state.bad + 1}, () => this.setAverage()) 
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
        <Button handleClick={this.goodClick} name = 'hyvä' /> 
        <Button handleClick={this.neutralClick} name = 'neutraali' /> 
        <Button handleClick={this.badClick} name = 'huono' />
        <Statistics votes = {this.state} />
      </div>
    );
  }
}

export default App;
