import React from 'react';

import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

import './App.css';

class App extends React.Component {

  render() {
  return (
    <div style={{ width: 400, margin: 20 }}>
      <Header />
      <AddTodo />
      <hr />
      <TodoList />
      <hr />
      <TodoFilter />
    </div>
  );
}
}

export default App;
