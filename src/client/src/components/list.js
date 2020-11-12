import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem } from './listactions';
import PropTypes from "prop-types";

class List extends Component {
    constructor(props){
        super(props);
        this.deleteMessage = this.deleteMessage.bind(this);
    };

    componentDidMount = () => {
        console.log("mounting");
        this.props.getItems();
    }

    deleteMessage=(deleteid)=>{
        this.props.deleteItem(deleteid);
    }

    
    render() {
        const output = this.props.list.map(({_id, name}) => (
          <div key={_id}>
              {name}
              <button onClick={() => this.deleteMessage(_id)} style={{marginLeft:"20px"}}>Delete Message</button>
          </div>
        ))
        return (
            <div>
              <h1>Items</h1>
              {output}
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        // The name items is based on the name what you will define it in the reducer
        list: state.list.items
    }
}

List.propTypes = {
    list: PropTypes.array.isRequired,
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
 };

export default connect(mapStateToProps, {getItems,deleteItem})(List);

