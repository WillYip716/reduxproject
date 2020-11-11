import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addItem } from './listactions';
import PropTypes from "prop-types";

class AddList extends Component {
    constructor(props){
        super(props);
        this.state = {
            body: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
    };

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            name: this.state.body
        };

        this.props.addItem(post);
    }

    render(){
        return(
            <div>
                <h1>Add a message</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Message</label>
                    <br/>
                    <input type="text" name="body" onChange={this.onChange} value={this.state.body} />
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


AddList.propTypes = {
    addItem: PropTypes.func.isRequired
 };

export default connect(null, {addItem})(AddList);