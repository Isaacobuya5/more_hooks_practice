import React from "react";

// export default class TodoFilterItem extends React.Component {

//     constructor(props) {
//         super(props);
//       this.handleFilter = this.handleFilter.bind(this);
//     }

//     handleFilter() {
//         const { name, filterTodos } = this.props;
//         filterTodos(name);
//     }

//     render() {
//         const { name, filter='all' } = this.props;
//         const style = {
//             color: "blue",
//             cursor: "pointer",
//             fontWeight: (filter === name ) ? 'bold' : 'normal'
//         }
//         return (
//         <span style={style}
//         onClick={this.handleFilter}
//         >{name}</span>
//         );
//     }
// }

const TodoFilterItem = ({name,filterTodos,filter='all' }) => {
    const style = {
        color: "blue",
        cursor: "pointer",
        fontWeight: (filter === name ) ? 'bold' : 'normal'
    }

    return <span style={style} onClick={() => filterTodos(name)}>{name}</span>
}

export default TodoFilterItem;