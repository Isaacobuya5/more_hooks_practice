import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import { StateContext } from "../contexts/StateContexts";

// export default class TodoList extends React.Component {

//     static contextType = StateContext;

//     render() {

//         const items = this.context;
//         // items = [
//         //     { id: 1, title: 'Write React Hooks book', completed: true },
//         //     { id: 2, title: 'Promote book', completed: false }
//         // ];
//         return (
//         items.map(item => <TodoItem key={item.id} {...item} {...this.props}/>)
//         );
//     }
// }

const TodoList = (props) => {
    const items = useContext(StateContext);
    return items.map((item, index) => <TodoItem key={index} {...item} {...props} />);
} 
export default TodoList;