import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Todos from "./components/todo/Todos";
import AddTodo from "./components/todo/AddTodo";
import About from "./components/pages/About";
import { v4 as uuidv4 } from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Dinner with wife',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Meeting with Boss',
        completed: false,
      }
    ]
  }

  // Toogle Complete
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
}

// Delete Todo
delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
}

// Add Todo
addTodo = (title) => {
  const newTodo = {
    id: uuidv4(),
    title: title,
    completed: false,
  }
  this.setState({ todos: [...this.state.todos, newTodo]})
}

render() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className="container">
      <Route exact path="/" render={props => (
        <React.Fragment>
            <AddTodo addTodo={this.addTodo} />
            <Todos todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo} />
        </React.Fragment>
      )} />
      <Route path="/about" component={About} />

      </div>
      <Footer />
    </div>
    </Router>
  );
}
}

export default App;
