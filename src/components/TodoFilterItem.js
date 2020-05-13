import React from "react";

export default class TodoFilterItem extends React.Component {

    render() {
        const { name } = this.props;
        const style = {
            color: "blue",
            cursor: "pointer"
        }
        return (
        <span style={style}>{name}</span>
        );
    }
}