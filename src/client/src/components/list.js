import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';


class List extends Component {
  constructor(props) {
    // need super to call the parent's class constructor
    super(props);
    this.state = {
    }
  }render() {
    return (
      <Container>
      </Container>
    );
  }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);