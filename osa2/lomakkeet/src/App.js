import React from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Entry from './components/Entry'
import personService from './services/persons'



class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        persons: [],
        newName: '',
        newNumber: '',
        filter: ''
        }
    }

    componentDidMount = () => {
        personService
            .getAll()
            .then(persons => {
                // this needed to be done, becuse my search works like that :P
                persons.forEach(person => person.matchSearch = true) 
                this.setState({ persons })
            })
    }

    addEntry = (event) => {
        event.preventDefault();
        let match = this.state.newName.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1 
        const nameObject = {
            name: this.state.newName,
            number: this.state.newNumber,
            matchSearch: match
        }
        if(!this.state.persons.find(person => person.name === this.state.newName)) {
            personService
                .create(nameObject)
                .then(person => {
                    this.setState({
                        persons: this.state.persons.concat(person),
                        newNote: ''
                    })
                })
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
            

            <Filter filter={this.state.filter} handleFilterChange = {this.handleFilterChange} /> 

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
                        <Entry key = {person.name} person = {person} /> 
                    )
                }
                </tbody>
            </table>
        </div>
        )   
    }
}

export default App