import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from './listactions';
import PropTypes from "prop-types";

class List extends Component {

    componentDidMount = () => {
        console.log("mounting");
        this.props.getItems();
    }

    
    render() {
        const output = this.props.list.map(({_id, name}) => (
          <div key={_id}>
              {name}
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
 };

export default connect(mapStateToProps, {getItems})(List);

