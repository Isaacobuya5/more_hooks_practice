import React, {useState} from "react";

// export default class AddTodo extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             input: ''
//         }
//         this.handleInput = this.handleInput.bind(this);
//         this.handleAdd = this.handleAdd.bind(this);
//     }

//     // input field handler
//     handleInput(e) {
//         e.preventDefault();
//         const { value } = e.target;
//         console.log(value);
//         this.setState({input: value});
//     }

//     // method to handle a new todo item
//     handleAdd(e) {
//         e.preventDefault();
//         const { input } = this.state;
//         const { addTodo } = this.props;

//         if (input) {
//             addTodo(input);
//             // clear the input field
//             this.setState({input: ''});

//         }
//     }

//     render() {
//         const { input } = this.state;
//         console.log(input);
//         return (
//           <form 
//           style={{ margin: "20px 0px"}}
//           onSubmit={this.handleAdd}
//           >
//               <input 
//               type="text" 
//               placeholder="enter new task here..." 
//               style={{
//                   width: 450,
//                   height: 15
//               }} 
//               value={input}
//               onChange={this.handleInput}
//               />
//               <input 
//               type="submit"
//               style={{
//                   float: "right",
//                   marginTop: 2
//               }}
//               value="add"
//               disabled={!input}
//               />
//           </form>
//         );
//     }
// }

const AddTodo = ({addTodo}) => {
    const [input, setInput] = useState('');
 
        // input field handler
    const handleInput = (e) => {
            e.preventDefault();
            const { value } = e.target;
            setInput(value);
        }

    const handleAdd = (e) => {
            e.preventDefault();
            if (input) {
                addTodo(input);
                // clear the input field
                setInput('');
            }
        }

        return (
            <form 
            style={{ margin: "20px 0px"}}
            onSubmit={handleAdd}
            >
                <input 
                type="text" 
                placeholder="enter new task here..." 
                style={{
                    width: 450,
                    height: 15
                }} 
                value={input}
                onChange={handleInput}
                />
                <input 
                type="submit"
                style={{
                    float: "right",
                    marginTop: 2
                }}
                value="add"
                disabled={!input}
                />
            </form>
          );
}

export default AddTodo;