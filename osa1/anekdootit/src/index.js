import React from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [0,0,0,0,0,0]
    }
  }

  render() {
    let a = Math.floor(Math.random()*5)

    let mostVotes = this.state.votes.indexOf(Math.max(...this.state.votes));
    
    return (
        <div>
            <button onClick = {() => {
                this.setState({selected: a})
            }}>Next Anecdote</button>
            <button onClick = {() => {
                let copy = [...this.state.votes]
                copy[this.state.selected]++;
                this.setState({votes: copy})
            }}>Vote</button>
            <div>
                <p>
                    {this.props.anecdotes[this.state.selected]}
                </p>
                <p>
                    This anecdote has {this.state.votes[this.state.selected]} votes.
                </p>
            </div>
            <div>
                <h1>anecdote with most votes</h1>
                <p>{this.props.anecdotes[mostVotes]}</p>
                <p>It has {this.state.votes[mostVotes]} votes</p>
            </div>
        </div>
    )
  }
}
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)



