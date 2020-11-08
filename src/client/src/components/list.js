import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from './listactions';

class List extends Component {

    componentDidMount = () => {
        this.props.getItems();
    }

    

    render() {
        const { items } = this.props.list;
        const output = items.map(({id, name}) => (
          <div key={id}>
              {name}
          </div>
        ))
        return (
            <div>
              <h1>items</h1>
              {output}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // The name items is based on the name what you will define it in the reducer
        list: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getItems
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);