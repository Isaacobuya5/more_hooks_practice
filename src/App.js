import React from 'react';
import { v4 } from "uuid";

import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";


import { StateContext } from "./contexts/StateContexts";
import fetchAPIsTodos from "./api";

import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filteredTodos: [],
      filter: 'all'
    }
    this.fetchTodos = this.fetchTodos.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.filterTodos = this.filterTodos.bind(this);
  }

  componentDidMount() {
    this.fetchTodos();
  }

  // fetching list of todos
  fetchTodos() {
   fetchAPIsTodos().then((todos) => {
     this.setState({ todos });
     this.filterTodos();
   })
  }

  // adding a new todo
  addTodo(title) {
    const { todos } = this.state;
    const newTodo = {
      id: v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [newTodo,...todos]});

    this.filterTodos();
  }

  // remove a given todo
  removeTodo(id) {
    const { todos } = this.state;
    // returning a todo minus todo with the given id
    const remainingTodos = todos.filter(todo => todo.id !== id);
    this.setState({ todos: remainingTodos});
    this.filterTodos();
  }

  // apply filters to todo list
  applyFilter(todos, filter) {
    switch(filter) {
      case 'active':
        return todos.filter(todo => todo.completed === false);
      case 'completed':
        return todos.filter(todo => todo.completed === true);
      default:
        case 'all':
        return todos;
    }
  }

  // toggle completion status of todo
  toggleTodo(id) {
    const { todos } = this.state;

    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    },[]);

    this.setState({ todos: newTodos });
    this.filterTodos();
  }
  
  filterTodos(filterArg) {
    this.setState(({
      todos, filter
    }) => ({
      filter: filterArg || filter,
      filteredTodos: this.applyFilter(todos, filterArg || filter)
    }));
  }

  render() {

    const { filter, filteredTodos } = this.state;
  return (
    <StateContext.Provider value={filteredTodos}>
    <div style={{ width: 400, margin: 20 }}>
      <Header />
      <AddTodo addTodo={this.addTodo}/>
      <hr />
      <TodoList toggleTodo={this.toggleTodo} removeTodo={this.removeTodo} />
      <hr />
      <TodoFilter filter={filter} filterTodos={this.filterTodos}/>
    </div>
    </StateContext.Provider>
  );
}
}

export default App;
