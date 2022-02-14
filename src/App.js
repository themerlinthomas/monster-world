import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    // Using arrow function it automatically binds to where it is defined in first place by lexical scoping
    this.setState({searchField : e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters World</h1>
        <SearchBox placeholder={"Search Monsters"} handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
