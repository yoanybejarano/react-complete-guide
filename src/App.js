// import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: 'abc1', name: 'Yoany', age: 29},
            {id: 'abc2', name: 'Andrea', age: 25},
            {id: 'abc3', name: 'Yeili', age: 32}
        ],
        otherState: 'some other value',
        showPersons: false
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(personItem => {
            return personItem.id === id;
        });
        const person = {...this.state.persons[personIndex]};
        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    }

    deletePersonHandler = (index) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons: persons});
    }

    togglePersonHandler = () => {
        this.setState({showPersons: !this.state.showPersons});
    }

    render() {

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                this.state.persons.map((person, index) => {
                    return <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        click={() => this.deletePersonHandler(index)}
                        changed={(event) => this.nameChangedHandler(event, person.id)}/>
                })
            );
            style.backgroundColor = 'red';

        }

        let classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi I'm React App</h1>
                <p className={classes.join(' ')}>This is really working</p>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>Toggle Persons
                </button>
                {persons}
            </div>
        );

        // return React.createElement('div',{className:'App'}, React.createElement('h1', null,'Hello World'));

    }
}

export default App;
