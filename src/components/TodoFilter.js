import React from "react";
import TodoFilterItem from "./TodoFilterItem";

// export default class TodoFilter extends React.Component {


//     render() {
//         return (
//             <div>
//          <TodoFilterItem name="all" {...this.props}/>{" / "}
//          <TodoFilterItem name="active" {...this.props}/>{" / "}
//          <TodoFilterItem name="completed" {...this.props}/>
//             </div>
//         )
//     }
// }
const TodoFilter = (props) => (
    <div>
    <TodoFilterItem name="all" {...props}/>{" / "}
    <TodoFilterItem name="active" {...props}/>{" / "}
    <TodoFilterItem name="completed" {...props}/>
    </div>
);

export default TodoFilter;