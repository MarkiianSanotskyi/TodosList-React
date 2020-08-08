import React, { Component } from 'react';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Todos from "./components/todo/Todos";

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false,
      },
      {
        id: 3,
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

render() {
  return (
    <div className="App">
      <Header />
      <Todos todos={this.state.todos}
       markComplete={this.markComplete}
       delTodo={this.delTodo} />
       <Footer />
    </div>
  );
}
}

export default App;
