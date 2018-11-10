import React, { Component } from "react";

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: [], // Array of toDos to display
      months: [
        // Array of months to display on header
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      weekday: [
        // Array of days to display on header
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]
    };
    this.handleChange = this.handleChange.bind(this); //Updates input form
    this.addTodo = this.addTodo.bind(this); //Adds todo to array
    this.onDelete = this.onDelete.bind(this);
  }
  //Deletes todo from array
  onDelete(e) {
    //Creates copy of array without selected toDo
    let deleteTodo = this.state.todos.filter(
      todo => todo !== this.state.todos[e.target.id]
    );
    //Sets array list to new toDo
    this.setState({
      todos: deleteTodo
    });
  }
  handleChange(e) {
    // Input change handler
    this.setState({ todo: e.target.value });
  }
  addTodo() {
    //Creates copy of old array of toDos
    let oldTodo = this.state.todos;
    //Creates new toDo element to add
    let newTodo = {
      todoContent: this.state.todo
    };
    //Adds new toDo to array
    if (this.state.todo !== "") {
      this.setState({ todos: oldTodo.concat(newTodo) });
      //Resets input field
      this.setState({ todo: "" });
    }
  }

  render() {
    var d = new Date(); // new date for header
    return (
      <div>
        <div className="create">
          <h1 className="day">
            {this.state.weekday[d.getDay()]}, {d.getDate()}
          </h1>
          <h3 className="month"> {this.state.months[d.getMonth()]} </h3>
          <input
            value={this.state.todo}
            type="text"
            onChange={this.handleChange}
            placeholder="type here"
          />
          <button type="submit" onClick={this.addTodo} className="plusSign">
            +
          </button>
          <div className="todoList">
            {this.state.todos.map((todo, index) => (
              <div className="todoContainer" key={index}>
                <button
                  className="deleteButton"
                  id={index}
                  onClick={this.onDelete}
                >
                  x
                </button>
                <span className="to-do">{todo.todoContent}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
