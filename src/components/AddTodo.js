import React from "react";

export default class AddTodo extends React.Component {

    render() {
        return (
          <form style={{ margin: "20px 0px"}}>
              <input 
              type="text" 
              placeholder="enter new task here..." 
              style={{
                  width: 450,
                  height: 15
              }} />
              <input 
              type="submit"
              style={{
                  float: "right",
                  marginTop: 2
              }}
              value="add"
              />
          </form>
        );
    }
}