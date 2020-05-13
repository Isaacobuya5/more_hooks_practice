import React from "react";
import TodoFilterItem from "./TodoFilterItem";

export default class TodoFilter extends React.Component {

    render() {
        return (
            <div>
         <TodoFilterItem name="all" />{" / "}
         <TodoFilterItem name="active" />{" / "}
         <TodoFilterItem name="completed" />
            </div>
        )
    }
}