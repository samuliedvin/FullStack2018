import React, { Component } from 'react';
import './App.css';

const Stat = ({name, votes}) => <div>{name} {votes}</div>


class App extends Component {
  constructor() {
    super()
    this.state = {
      good : 0,
      neutral : 0,
      bad : 0
    }
  }

  giveVote = (votable) => () => {
    console.log(votable)
    this.setState({votable : votable.votes + 1})
  }

  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
        <button onClick={ () => this.setState({ good : this.state.good + 1}) }>hyvä</button>
        <button onClick={ () => this.setState({ neutral : this.state.neutral + 1}) }>neutraali</button>
        <button onClick={ () => this.setState({ bad : this.state.bad + 1}) }>huono</button>
        <h1>statistiikka</h1>
        <Stat name = 'hyvä' votes = {this.state.good} />
        <Stat name = 'neutraali' votes = {this.state.neutral}/>
        <Stat name = 'huono' votes = {this.state.bad}/>
      </div>
    );
  }

}

export default App;
