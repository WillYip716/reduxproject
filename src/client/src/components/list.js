import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems } from './listactions';


class List extends Component {
  constructor(props) {
    // need super to call the parent's class constructor
    super(props);
    this.state = {
    }
  }
  
  componentDidMount() {
    this.props.getItems();
  }
  
  render() { 
    const { items } = this.props.list; 
    return ( 
      <Container> 
        <button 
          color="dark" 
          style={{ marginBottom: '2rem' }} 
          onClick={this.addItem}>Add Item
        </button>
        <ListGroup> 
          <TransitionGroup className="list"> 
            {items.map(({id, name}) => ( 
            <CSSTransition key={id} timeout={200} classNames="fade"> 
              <ListGroupItem> {name} 
              </ListGroupItem> 
            </CSSTransition> 
            ))} 
          </TransitionGroup> 
        </ListGroup> 
      </Container> 
    ); 
  }
}

const mapStateToProps = state => {
  return {
    // The name items is based on the name what you will define it in the rootReducer
    list: state.list
  }
}

const mapDispatchToProps = dispatch => {
    return {
      getItems
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);