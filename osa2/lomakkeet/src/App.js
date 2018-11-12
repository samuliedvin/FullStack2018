import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

    addEntry = (event) => {
        event.preventDefault();
        const nameObject = {
            name: this.state.newName
        }
        const persons = this.state.persons.concat(nameObject)
        this.setState({
            persons
        });
    }

  handleNameChange = (event) => {
    this.setState({newName: event.target.value})
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addEntry}>
          <div>
            nimi: <input value = {this.state.newName} onChange={this.handleNameChange}/>
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.state.persons.map(person => <p key={person.name}>{person.name}</p>)}
      </div>
    )
  }
}

export default App