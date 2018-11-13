import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        persons: [
            { 
                name: 'Arto Hellas',
                number: '0303030303',
                matchSearch: true 
            }
        ],
        newName: '',
        newNumber: '',
        filter: ''
        }
    }

    addEntry = (event) => {
        event.preventDefault();
        let match = this.state.newName.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1 
        const nameObject = {
            name: this.state.newName,
            number: this.state.newNumber,
            matchSearch: match
        }
        if(!this.state.persons.find((person) => person.name === this.state.newName)) {
            const persons = this.state.persons.concat(nameObject)
            this.setState({
                persons
            });
        } else {
            alert("Nimi on jo puhelinluettelossa.");
        }
    }

    handleNameChange = (event) => {
        this.setState({newName: event.target.value})
    }
    handleNumberChange = (event) => {
        this.setState({newNumber: event.target.value})
    }
    handleFilterChange = (event) => {
        this.setState({filter: event.target.value})
        let persons = [...this.state.persons]
        if(event.target.value !== '') {    
            persons.forEach(person => {
                person.matchSearch = (person.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1)
            })
        } else {
            persons.forEach(person => {
                person.matchSearch = true
            })
        }
        this.setState({persons})
    }

    

    render() {
        let personsToShow = this.state.persons.filter(person => person.matchSearch)
         

        return (
        <div>
            <h2>Puhelinluettelo</h2>
            

            <div>
                rajaa näytettäviä: <input value = {this.state.filter} onChange={this.handleFilterChange} />
            </div>

            <h2>Lisää uusi</h2>

            <form onSubmit={this.addEntry}>
                <div>
                    nimi: <input value = {this.state.newName} onChange={this.handleNameChange}/>
                </div>
                <div>
                    numero: <input value = {this.state.newNumber} onChange={this.handleNumberChange}/>
                </div>
                <div>
                    <button type="submit">lisää</button>
                </div>
            </form>
            <h2>Numerot</h2>
            <table>
                <tbody>
                    {personsToShow.map(person => 
                    <tr key={person.name}>
                        <td>{person.name}</td>
                        <td>{person.number}</td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
        )   
    }
}

export default App