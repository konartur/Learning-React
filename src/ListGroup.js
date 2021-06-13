import React,{Component} from 'react';

class ListGroup extends Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.items.map(item => <Li key={item.id} id={item.id} name={item.name}/>)} 
            </ul>
        )
    }
    
}

class Li extends Component {
    render() {
        let className = "list-group-item";
        if(this.props.id % 5 === 0) {
            className += " active";
        }
        return (
            <li className={className}>{this.props.name}</li>
        )
    }
}

export default ListGroup;