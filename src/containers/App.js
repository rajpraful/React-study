import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    Persons : [
      { id: '1a', name: 'Cristiano Ronaldo', club: 'Juventus'},
      { id: '1b', name: 'Gareth Bale', club: 'Real Madrid' },
      { id: '1c', name: 'Sargio Ramos', club: 'Real Madrid' }
    ],
    ShowPersons : false
  }

  ShowPersons = () => {
    const CurrentValue = this.state.ShowPersons;
    this.setState ({ShowPersons : !CurrentValue});
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.Persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.Persons[personIndex]};

    person.name = event.target.value;

    const Persons = [...this.state.Persons];
    Persons[personIndex] = person;

    this.setState({Persons : Persons});

  }

  PersonDeleteHandler = (PersonIndex) => {
    const person = this.state.Persons;
    person.splice(PersonIndex , 1);
    this.setState({ Persons: person });
  }

  render() {
    const style = {
      backgroundColor : 'green',
      border : '2px solid blue',
      padding : '8px',
      cursor : 'pointer',
      marginTop : '8px'
    }

    let persons = null;

    if (this.state.ShowPersons) {
      persons = (   
      <div>
        {this.state.Persons.map((person, index) => {
          return <Person 
          name={person.name} 
          club={person.club} 
          click={() => this.PersonDeleteHandler(index)} 
          key={person.id}
          change={(event) => this.nameChangedHandler(event, person.id)}
          />
        })} 
      </div>
      )

      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.Persons.length <=2) {
      classes.push('red')
    }
    if (this.state.Persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <header className="App-header">
          <p className={classes.join(' ')}>This is working</p>
          <button onClick={this.ShowPersons} style={style}>
            Show/hide cards
          </button>
          {persons}
        </header>
      </div>
    );    
  }
}

export default App;
