import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    Persons : [
      { name: 'Cristiano Ronaldo', club: 'Juventus'},
      { name: 'Gareth Bale', club: 'Real Madrid' },
      { name: 'Sargio Ramos', club: 'Real Madrid' }
    ]
  }

  switchNameHandler = (changedname) => {
    // console.log('This is clicked');
    // Don't do this : this.state.Persons[0].name = 'Dybala';
    this.setState( {
      Persons : [
        { name: changedname, club: 'Juventus' },
          { name: 'Gareth Bale', club: 'Real Madrid' },
          { name: 'Sargio Ramos', club: 'Real Madrid' }
        ]
      }
    )
  }

  nameChangedHandler = (event) => {
    this.setState({
      Persons: [
        { name: 'Cristiano Ronaldo', club: 'Juventus' },
        { name: event.target.value, club: 'Real Madrid' },
        { name: 'Sargio Ramos', club: 'Real Madrid' }
      ]
    }
    )
  }

  render() {
    const style = {
      backgroundColor : 'White',
      border : '2px solid blue',
      padding : '8px',
      cursor : 'pointer',
      marginTop : '8px'
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button 
            onClick={this.switchNameHandler.bind(this, "Dybala")}
            style={style}>
            Switch Name
          </button>
          <Person
            name={this.state.Persons[0].name}
            club={this.state.Persons[0].club}
            click={this.switchNameHandler.bind(this, "Max????")}
            change={this.nameChangedHandler}
          >
            One of the greatest ever
          </Person>
          <Person
            name={this.state.Persons[1].name}
            club={this.state.Persons[1].club}
            change={this.nameChangedHandler}
          />
          <Person
            name={this.state.Persons[2].name}
            club={this.state.Persons[2].club}
            change={this.nameChangedHandler}
          />
        </header>
      </div>
    );    
  }
}

export default App;
